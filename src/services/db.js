import { MongoClient, ObjectId } from "mongodb";

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

export async function deleteDocument(client, collection, id) {
  const db = client.db('bold');
  try {
    const objectId = new ObjectId(id);
    const filter = { _id: objectId };

    const result = await db.collection(collection).deleteOne(filter);
    return result;
  } catch (error) {
    console.log(error)
  }
  return result;
}

