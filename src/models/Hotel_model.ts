import { Schema } from 'mongoose';


const HotelSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100,
    lowercase: true
  },
  type: {
    type: String,
    required: true,
    enum: ['hotel', 'apartment', 'cabin', 'hostel'],
    lowercase: true
  },
  address: {
    
  }
})