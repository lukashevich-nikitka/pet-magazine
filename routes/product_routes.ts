import { Router, Request, Response } from 'express';
import { MongoServerError } from 'mongodb';
import { productsCollection } from '../services/servicesdb';
import { IProduct } from '../types/interfaces';

const router: Router = Router();

router.get('/hit_of_sales', async (req: Request, res: Response) => {
  try {
    const products = await productsCollection.find().sort({ rating: 1 }).toArray();
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
