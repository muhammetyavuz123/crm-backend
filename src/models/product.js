import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  numberPlate: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  remainingDebt: {
    type: Number,
  },
  photos: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("product", ProductSchema);

export default User;
