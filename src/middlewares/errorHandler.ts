import { NextFunction, Request, Response } from 'express';
import customError from '../utils/customError';
import errorCodes, { ErrorCodes } from '../utils/errorCodes';
const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof customError) {
    const code: string = error.code;
    const customError: any = errorCodes[code as keyof ErrorCodes];
    console.log(customError);
    return res
      .status(customError.statusCode)
      .json({ error: { message: customError.message } });
  }

  return res.status(500).json({ error: { message: error.message } });
};

export default errorHandler;
