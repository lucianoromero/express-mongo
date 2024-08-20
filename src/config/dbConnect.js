import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


async function conectaNaDatabase() {
    mongoose.connect(process.env.CONNET_MONGO)
    return mongoose.connection;
}

export default conectaNaDatabase;
