import express from 'express';
import cors from 'cors';
import { ObjectId } from 'mongodb';
import { connectDB, getDb } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// API Routes

app.get('/', (req, res) => {
    res.send('🚀 Travel Dashboard API is running...');
});

app.get('/api/trips', async (req, res) => {
    try {
        const db = getDb();
        const trips = await db.collection('trips').find({}).toArray();
        res.json(trips);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/trips', async (req, res) => {
    try {
        const db = getDb();
        const result = await db.collection('trips').insertOne(req.body);
        res.status(201).json({ ...req.body, _id: result.insertedId });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.delete('/api/trips/:id', async (req, res) => {
    try {
        const db = getDb();
        const result = await db.collection('trips').deleteOne({ 
            _id: new ObjectId(req.params.id) 
        });
        res.json({ message: "Trip deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start Server after DB Connection
const PORT = 5000;
connectDB().then(() => {
    app.listen(PORT, () => console.log(` Server on http://localhost:${PORT}`));
});