import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

const client: mongoDB.MongoClient = new mongoDB.MongoClient(
  'mongodb+srv://Nikita:Gtnhjcjdbx1@cluster0.xqm1uuh.mongodb.net/users'
);

export const usersCollection: mongoDB.Collection = client.db().collection('users');

export async function connectToDatabase() {
  dotenv.config();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  await client.connect();

  console.log(`Successfully connected to database: ${db.databaseName}`);
}
