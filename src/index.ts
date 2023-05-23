import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import logger from './utils/logger';

const server = express();

const PORT = process.env.PORT;
const MONGO_URI: string = process.env.MONGO_URI as string;

const mongoConnect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        logger.info('Connected to mongoDB atlas cluster');
    } catch (err) {
        throw err;
    }
}

mongoose.connection.on('disconnected', () => {
    logger.warn('mongoDB Disconnected');
});

mongoose.connection.on('connected', () => {
    logger.warn('mongoDB Connected')
})

server.listen(PORT , () => {
    mongoConnect();
    logger.info(`Connected to Backend ${PORT}`);
})