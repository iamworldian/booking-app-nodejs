import mongoose, { Schema } from 'mongoose';


const HotelSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100,
    lowercase: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['hotel', 'apartment', 'cabin', 'hostel'],
    lowercase: true,
  },
  city: {
    type: String,
    required: true,
    maxlength: 100,
  },
  address: {
    type: String,
    required: true,
    maxlength: 200,
  },
  distanceInKm: {
    type: Number,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rooms : {
    type: [String]
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  featured: {
    type: Boolean,
  },
})

export default mongoose.model('Hotel', HotelSchema);