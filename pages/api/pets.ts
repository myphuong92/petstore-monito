import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '@utils/database';
import mongoose from 'mongoose';

type Pet = {
  _id: string;
  Name: string;
  Gender: string;
  Age: string;
  Price: string;
  Images: string[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDB();

  try {
    const database = mongoose.connection.db;
    const collection = database.collection('Pets');
    const result = await collection.find({}).toArray();

    const pets: Pet[] = result.map(item => ({
      _id: item._id.toString(),
      Name: item.Name,
      Gender: item.Gender,
      Age: item.Age,
      Price: item[" Price "].trim(),
      Images: item.Images,
    }));

    res.status(200).json(pets);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
