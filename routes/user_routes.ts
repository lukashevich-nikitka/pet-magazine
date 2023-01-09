import { Router, Request, Response } from 'express';
import { collections } from '../services/servicesdb';

const router: Router = Router();

router.post('/registration', async (req: Request, res: Response) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
