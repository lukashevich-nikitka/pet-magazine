import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

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

app.use("/api/user", require("./routes/user_routes"));


app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));

