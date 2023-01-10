import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { MongoServerError } from 'mongodb';
import { usersCollection } from '../services/servicesdb';
import { IUser, IRegistrationAnswer } from '../types/interfaces';

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
                    };
                    const registrationAnswer: IRegistrationAnswer = {
                        name: firstName,
                        surname: lastName,
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

module.exports = router;