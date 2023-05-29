import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import customError from '../utils/customError';
import IUserRequest from './IUserRequest';

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.accesstoken;

  if (!token) {
    throw new customError('INVALID_TOKEN');
  }

  const user = jwt.verify(token, process.env.JWT_SECRET as string);
  
  (req as IUserRequest).user = user;
  next();
};

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (
    (req as IUserRequest).user.id === req.params.id ||
    (req as IUserRequest).user.isAdmin
  ) {
    next();
  } else throw new customError('UNAUTHORIZED_OPERATION');
};

export const verifyAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if ((req as IUserRequest).user.isAdmin) {
    next();
  } else throw new customError('UNAUTHORIZED_OPERATION');
};
