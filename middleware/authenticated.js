import jwt from "jsonwebtoken";
import { asyncErrorHandler } from "./Error.js";
import User from "../models/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const isAuthenticated = asyncErrorHandler(async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return next(new ErrorHandler("User is not authenticated", 401));

  const decodeData = jwt.verify(token, process.env.SECRET);
  req.user = await User.findById(decodeData._id);

  next();
});
export const isAdmin = asyncErrorHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role !== "admin")
    return next(new ErrorHandler("You are not authorized", 401));

  next();
});
