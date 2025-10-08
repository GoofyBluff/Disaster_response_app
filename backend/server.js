import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import incidentRoutes from './routes/incidentRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json())

app.use('/api/incidents', incidentRoutes);

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("MongoDB connection error ", error));


app.get('/', (req, res) => {
  res.send("Disaster response App is running")
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})