import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { petshop?: mongoDB.Collection } = {}

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    'mongodb+srv://Nikita:Gtnhjcjdbx1@cluster0.xqm1uuh.mongodb.net/petshop'
  );

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  await client.connect();

  console.log(`Successfully connected to database: ${db.databaseName}`);
}
