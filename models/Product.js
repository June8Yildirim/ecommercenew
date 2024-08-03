import { Schema, Types, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter Product title"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  images: [
    {
      product_id: String,
      url: String,
    },
  ],
  price: {
    type: Number,
    required: [true, "Please enter Product price"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter Product stock"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter Product quantity"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  categoryId: {
    type: Types.ObjectId,
    ref: "Category",
    required: true,
  },
  owner: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default model("Product", productSchema);
