import { NextFunction, Request, Response } from 'express';
const tryCatch =
  (controller: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
   return Promise.resolve(controller(req, res, next)).catch(next);
  };

export default tryCatch;
