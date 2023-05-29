import { NextFunction, Request, Response } from 'express';
import Hotel_model from '../models/Hotel_model';
import Room_model from '../models/Room_model';

export const createRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room_model(req.body);

  const savedRoom = await newRoom.save();
  console.log(hotelId);

  const updatedHotel = await Hotel_model.findOneAndUpdate(
    { _id: hotelId },
    { $push: { rooms: savedRoom.id } },
    { new: true },
  );

  return res.status(200).json({ message: 'Room Saved and updated' });
};

export const deleteRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;
  const hotelId = req.params.hotelid;
  await Room_model.deleteOne({ _id: id })

  const updatedHotel = await Hotel_model.findOneAndUpdate(
    { _id: hotelId },
    { $pull: { rooms: id } },
    { new: true },
  );

  return res.status(200).json({message: "Hotel Deleted"});
};

export const updateRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const updatedHotel = await Room_model.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },
  );
  return res.status(200).json(updatedHotel);
};

export const getRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const room = await Room_model.findOne({ _id: req.params.id });
  return res.status(200).json(room);
};

export const getAllRooms = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const rooms = await Room_model.find();
  return res.status(200).json(rooms);
};
