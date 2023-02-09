import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.get('/', async (req, res) => {
    res.send('Hello from ApaarAI');
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => {
            console.log('Starting server');
        })
    } catch (error) {
        console.log('Error: ' + error);
    }
}

startServer();