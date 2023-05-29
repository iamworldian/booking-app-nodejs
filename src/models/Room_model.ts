import mongoose, { Schema } from 'mongoose';

const RoomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 100,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    roomNumbers: [
      {
        roomNumber: {
          type: Number,
        },
        unavailableDate: { type: [Date] },
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model('Room', RoomSchema);
