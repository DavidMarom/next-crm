import { MongoClient } from "mongodb";

export async function connectDatabase() {
  return await MongoClient.connect(process.env.DB_CONNECTION);
}

export async function insertDocument(client, collection, document) {
  const db = client.db('bold');
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection) {
  const db = client.db('bold');
  const documents = await db.collection(collection).find().toArray();
  return documents;
}

