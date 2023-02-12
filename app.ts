import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectToDatabase } from './services/servicesdb';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT ?? 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
    cors({
        origin: "*",
    })
);

app.use(express.static('images/products'));

connectToDatabase().then(() => {
    app.use("/api/user", require("./routes/user_routes"));
    app.use("/api/product/", require("./routes/product_routes"));
    app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));
}).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
});

