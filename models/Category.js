import { Schema, Types, model } from "mongoose";

const CategorySchema = new Schema({
  category: {
    type: String,
    required: [true, "Please enter category"],
    unique: true,
  },
});

export default model("Category", CategorySchema);
