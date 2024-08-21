import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect(process.env.CONNET_MONGO)
    return mongoose.connection;
}

export default conectaNaDatabase;
