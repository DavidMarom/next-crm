import { connectDatabase, getAllDocuments, insertDocument, deleteDocument } from "../../services/db";

async function handler(req, res) {

  if (req.method === "GET") {
    try {
      const client = await connectDatabase();
      const documents = await getAllDocuments(client, "items");
      res.status(200).json(documents);
    } catch (error) { res.status(500).json({ message: "Connecting to the database failed!" }) }
  }

  if (req.method === "POST") {
    const { name, price } = req.body;
    if (!name || !price) { return res.status(422).json({ message: "Invalid input." }) }
    const newDocument = { name, price };
    try {
      const client = await connectDatabase();
      const result = await insertDocument(client, "items", newDocument);
      newDocument._id = result.insertedId;
      res.status(201).json({ message: "Inserted document.", document: newDocument });
    }
    catch (error) { res.status(500).json({ message: "Inserting data failed!" }) }
  }

  if (req.method === "DELETE") {
    const id = req.query.id;
    try {
      const client = await connectDatabase();
      const result = await deleteDocument(client, "items", id);
      res.status(201).json({ message: "Deleted document." });
    }
    catch (error) { res.status(500).json({ message: "Deleting data failed!" }) }
  }
}

export default handler;
