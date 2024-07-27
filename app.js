import { connectDB } from "./database/mongodb.js";
import { app } from "./server.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT; //|| 5000;
import cloudinary from "cloudinary";
import Stripe from "stripe";

connectDB();

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.listen(port, () => {
  console.log("Server start listening on ", port);
});
