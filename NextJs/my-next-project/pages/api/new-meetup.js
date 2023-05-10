import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title, image, address, description } = req.body;
    const data = { title, image, address, description };

    const client = await MongoClient.connect(
      "mongodb+srv://bhautik02:12345@nasacluster.nv87djh.mongodb.net/meetUp?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({
      status: "created",
      result,
    });
  }
};

export default handler;
