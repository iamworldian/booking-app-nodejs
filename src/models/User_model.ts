import mongoose, { Schema } from 'mongoose';

const HotelSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 100,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 100,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('User', HotelSchema);
