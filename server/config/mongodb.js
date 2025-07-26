import mongoose from "mongoose";
import { DB_URL } from "./env";

if (!DB_URL) {
    throw new Error(`Please define the DB_URL in the environment varibles inside .env`);
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log(`Connected to the database.`);
    } catch (error) {
        console.log('Error connecting to the database: ', error);
        process.exit(1);
    }
}

export default connectToDatabase;