import { NextFunction, Request, Response } from 'express';
import Hotel_model from '../models/Hotel_model';

export const saveHotel = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const hotel = new Hotel_model(req.body);
  const savedHotel = await hotel.save();
  return res.status(200).json(savedHotel);
};

export const editHotel = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const updatedHotel = await Hotel_model.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },
  );
  return res.status(200).json(updatedHotel);
};

export const deleteHotel = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  await Hotel_model.deleteOne({ _id: req.params.id });
  return res.status(200).json({ msg: 'Hotel Deleted' });
};

export const getHotel = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const hotel = await Hotel_model.findOne({ _id: req.params.id });
  return res.status(200).json(hotel);
};

export const getAllHotels = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const hotels = await Hotel_model.find();
  return res.status(200).json(hotels);
};
