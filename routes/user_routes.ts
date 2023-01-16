import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { MongoServerError } from 'mongodb';
import { usersCollection } from '../services/servicesdb';
import { IUser, IRegistrationAnswer, IJWTObject, IAuthAnswer } from '../types/interfaces';
// import passport from 'passport';
// import { StrategyOptions } from 'passport-jwt';

const router: Router = Router();

router.post('/registration', async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, age, repeatPassword } = req.body;
    if (password === repeatPassword) {
        try {
            const uniqueness = await usersCollection.findOne({ email: email })
            uniqueness
                ? res.status(400).send('User with such email already exists.')
                : bcrypt.hash(password, 10, async function (err, hash) {
                    const newUser: IUser = {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: hash,
                        age: age,
                        role: 'user',
                    };
                    const registrationAnswer: IRegistrationAnswer = {
                        firstName: firstName,
                        lastName: lastName,
                        registrationAnswer: 'User successfully registered.',
                    };
                    await usersCollection.insertOne(newUser),
                        res.status(201).send(registrationAnswer);
                })
        } catch (error) {
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`);
            } else {
                console.log(error);
            }
            res.status(500).send('Failed to register a new user.');
        }
    } else {
        res.status(400).send('Passwords must match.');
    }
});

router.post('/auth', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await usersCollection.findOne({ email: email });
    if (user) {
        try {
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    const jwtPayload: IJWTObject = {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        age: user.age,
                        role: user.role,
                    }
                    const token: string = jwt.sign(jwtPayload, 'petshop');
                    const authAnswer: IAuthAnswer = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token,
                    }
                    result
                        ? res.status(201).send(authAnswer)
                        : res.status(400).send('Hacking attempt');
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send('Something goes wrong');
        }
    } else {
        res.status(400).send('No user with such email');
    }
})

module.exports = router;