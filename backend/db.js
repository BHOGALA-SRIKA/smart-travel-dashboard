import { MongoClient } from 'mongodb';
import 'dotenv/config';

const client = new MongoClient(process.env.MONGO_URI);
let db;

export async function connectDB() {
    try {
        await client.connect();
        db = client.db(); 
        console.log(" MongoDB Local Connected");
        return db;
    } catch (err) {
        console.error(" MongoDB Connection Error:", err);
        process.exit(1);
    }
}

export const getDb = () => db;