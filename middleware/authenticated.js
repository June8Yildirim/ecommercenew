import jwt from "jsonwebtoken";
import { asyncErrorHandler } from "./Error.js";
import User from "../models/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const isAuthenticated = asyncErrorHandler(async (req, res, next) => {
  console.log(JSON.stringify(req.cookies));
  const token = req.cookies.token;

  console.log(">>>>>>>>>>>>>>");
  if (!token) return next(new ErrorHandler("User is not authenticated", 401));
  console.log(">>>>>>>>>>>>>>");

  const decodeData = jwt.verify(token, process.env.SECRET);
  console.log(JSON.stringify(jwt.verify(token, process.env.SECRET)));
  console.log("$$$$$$$$$$$$$$4", JSON.stringify(decodeData));
  req.user = await User.findById(decodeData._id);
  console.log(">>>>>>>>>>>>>>");
  console.log(user);
  next();
});
export const isAdmin = asyncErrorHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role !== "admin")
    return next(new ErrorHandler("You are not authorized", 401));

  next();
});
