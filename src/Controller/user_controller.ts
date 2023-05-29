import { NextFunction, Request, Response } from 'express';
import User_model from '../models/User_model';


export const editUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const updatedUser = await User_model.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },
  );
  return res.status(200).json(updatedUser);
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  await User_model.deleteOne({ _id: req.params.id });
  return res.status(200).json({ msg: 'User Deleted' });
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const User = await User_model.findOne({ _id: req.params.id });
  return res.status(200).json(User);
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const Users = await User_model.find();
  return res.status(200).json(Users);
};
