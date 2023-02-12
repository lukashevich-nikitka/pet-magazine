import { Router, Request, Response } from 'express';
import { MongoServerError, ObjectId } from 'mongodb';
import { productsCollection, usersCollection } from '../services/servicesdb';

const router: Router = Router();

router.get('/hit_of_sales', async (req: Request, res: Response) => {
  try {
    const products = await productsCollection.find().sort({ rating: 1 }).toArray();
    console.log(products);
    res.status(201).send(products);
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`);
    } else {
      console.log(error);
    }
    res.status(500);
  }
});

router.get('/recommend', async (req: Request, res: Response) => {
  try {
    const products = await productsCollection.find().sort({ rating: 1 }).toArray();
    console.log(products);
    res.status(201).send(products);
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`);
    } else {
      console.log(error);
    }
    res.status(500);
  }
});

router.get('/:user_id/purchases', async (req: Request, res: Response) => {
  try {
    const user = await usersCollection.find({ _id: new ObjectId(req.params.user_id) });
    if (user.products.length) {
      const products = await productsCollection.find({ _id: { $in: user.products } }).toArray();
      res.status(201).send(products);
    } else {
      res.status(201).send([]);
    }
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`);
    } else {
      console.log(error);
    }
    res.status(500);
  }
});


module.exports = router;
