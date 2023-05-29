import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import errorHandler from './middlewares/errorHandler';
import auth_router from './routes/auth_route';
import hotels_router from './routes/hotels_route';
import rooms_router from './routes/rooms_route';
import users_router from './routes/users_route';
import logger from './utils/logger';
import cookieParser from 'cookie-parser';
dotenv.config();

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
};

mongoose.connection.on('disconnected', () => {
  logger.warn('mongoDB Disconnected');
});

mongoose.connection.on('connected', () => {
  logger.warn('mongoDB Connected');
});

// middleware

server.use(express.json());
server.use(cookieParser());
// Routers
// server.use('/', (req, res) => {
//     res.status(200).json({ msg : "OK"});
// });
server.use('/api/hotels', hotels_router);
server.use('/api/auth', auth_router);
server.use('/api/rooms', rooms_router);
server.use('/api/users', users_router);
server.use(errorHandler);

// Server Connect
server.listen(PORT, () => {
  mongoConnect();
  logger.info(`Connected to Backend ${PORT}`);
});
