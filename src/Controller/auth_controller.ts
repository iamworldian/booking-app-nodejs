import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import User_model from '../models/User_model';
import customError from '../utils/customError';
import { UserSchema_Z, passwordModel } from '../utils/validationModel';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { password } = req.body;
  const report = passwordModel.validate(password);

  if (!report) {
    throw passwordModel.validate(password, { details: true });
  }

  UserSchema_Z.parse(req.body);

  const newUser = new User_model(req.body);
  const salt = await bcrypt.genSalt(10);
  newUser.password = bcrypt.hashSync(newUser.password, salt);
  const user = await newUser.save();
  return res.status(200).json(user);
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = await User_model.findOne({ username: req.body.username });

  if (!user) {
    throw new customError('USER_NOT_FOUND');
  }
  const report = await bcrypt.compare(req.body.password, user.password);
  if (!report) {
    throw new customError('INVALID_EMAIL_OR_PASSWORD');
  }

  const token = jwt.sign(
    _.pick(user, ['_id', 'isAdmin']),
    process.env.JWT_SECRET as string,
  );

  return res
    .cookie('accesstoken', token, { httpOnly: true })
    .status(200)
    .json(_.pick(user, ['username', 'email']));
};
