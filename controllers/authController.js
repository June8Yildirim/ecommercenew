import { asyncErrorHandler } from "../middleware/Error.js";
import User from "../models/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { cookieOptions, sendToken } from "../utils/sendToken.js";
import { getDataUri } from "../utils/dataUri.js";
import cloudinary from "cloudinary";
import { sendEmail } from "../utils/sendEmail.js";

export const login = asyncErrorHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return ErrorHandler(
      "password or email is/are not valid please check them",
      422,
    );
  const user = await User.findOne({ email }).select("+password");
  if (!user)
    return new ErrorHandler(
      "You are not authorized please check your credentials",
      403,
    );
  const isAuthorized = await user.comparePassword(password);
  if (!isAuthorized)
    return ErrorHandler(
      "You are not authorized please check your credentials",
      403,
    );
  // TODO: change and placed in .env file
  const accessToken = user.generateToken("15m");
  const refreshToken = user.generateToken("1d");

  //Check the users refreshToken
  if (!user.tokens) user.tokens = [refreshToken];
  else user.tokens.push(refreshToken);
  await user.save();

  const optUser = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: accessToken,
  };
  sendToken(res, 200, accessToken, "User Authorized");
  // sendToken(res, 200, [accessToken, refreshToken], optUser);
  // res.cookie("accessToken", accessToken, {
  //   ...cookieOptions,
  // });
  // res.cookie("refreshToken", refreshToken, {
  //   ...cookieOptions,
  // });
  //
  // console.log(req.cookies);
  // console.log("<<<<<<<<<<<<<<<");
  // res.status(200).json({ user });
});

export const createUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password, name } = req.body;
  if (!email) return next(new ErrorHandler("Email input is missing", 422));
  if (!password)
    return next(new ErrorHandler("password input is missing", 422));
  if (!name) return next(new ErrorHandler("Name input is missing", 422));
  const existingUser = await User.findOne({ email });
  if (existingUser)
    return next(
      new ErrorHandler("Email has been taken, use another email", 403),
    );

  let avatar = undefined;
  if (req.file) {
    const file = getDataUri(req.file);
    const image = await cloudinary.v2.uploader.upload(file.content);
    avatar = {
      url: image.secure_url,
      public_id: image.public_id,
    };
  }
  const user = await User.create({ ...req.body, avatar });
  res.status(201).json({ success: true, message: "User created" });
});

export const getUserProfile = asyncErrorHandler(async (req, res, next) => {
  const id = req.user._id;
  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler("User not found", 403));
  console.log(user);
  const optUser = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: accessToken,
  };
  res.status(200).json({ user });
});

export const logOut = asyncErrorHandler(async (req, res, next) => {
  console.log("...............");
  res
    .status(200)
    .cookie("authToken", { ...cookieOptions, expires: new Date(Date.now()) })
    .json({ success: true, message: "Logged Out successfully" });
});

export const forgetPassword = asyncErrorHandler(async (req, res, next) => {
  const { email } = req.body;

  const max = 999999;
  const min = 100000;
  if (!email) return next(new ErrorHandler("Email does not found", 404));

  const user = await User.findOne({ email });
  if (!user) return next(new ErrorHandler("User not found", 403));

  const otp_expire = 15 * 60 * 6000;
  const otp = Math.floor(Math.random() * (max - min) + min);
  user.oneTimePassword = otp;
  user.oneTimePasswordExpire = otp;
  await user.save();
  const message = "";
  try {
    await sendEmail(
      "One Time Password to reset current password",
      user.email,
      message,
    );
  } catch (error) {
    user.oneTimePassword = null;
    user.oneTimePasswordExpire = null;
    await user.save();
    return next(
      new ErrorHandler("Email does not send it, please try again", 422),
    );
  }
  res.status(201).json({ message: "Check your email to reset password" });
});

export const resetPassword = asyncErrorHandler(async (req, res, next) => {
  const { oneTimePassword, password } = req.body;

  const user = await User.findOne({
    oneTimePassword,
    oneTimePasswordExpire: { $gt: Date.now() },
  }).select("+password");
  if (!user) return next(new ErrorHandler("User not found", 403));
  user.password = password;
  user.oneTimePasswordExpire = undefined;
  user.oneTimePassword = undefined;
  await user.save();

  res.status(201).json({ message: "User's password is resetted" });
});
export const updatePassword = asyncErrorHandler(async (req, res, next) => {
  const id = req.user._id;
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    return next(
      new ErrorHandler("Please provide old and new password together", 422),
    );
  const user = await User.findById(id).select("+password");
  if (!user) return next(new ErrorHandler("User not found", 403));
  const isMatched = await user.comparePassword(oldPassword);
  if (!isMatched) return next(new ErrorHandler("Incorrect old password", 403));
  user.password = newPassword;
  user.updatedAt = Date.now();
  user.save();
  res.status(201).json({ message: "Password updated successfully" });
});

export const updateProfile = asyncErrorHandler(async (req, res, next) => {
  const id = req.user._id;
  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler("User not found", 403));
  const updated = await User.findByIdAndUpdate(id, {
    ...req.body,
    updatedAt: Date.now(),
  });
  res.status(201).json({ updated });
});

export const updateAvatar = asyncErrorHandler(async (req, res, next) => {
  const id = req.user._id;
  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler("User not found", 403));
  let avatar = undefined;
  if (req.file) {
    await cloudinary.v2.uploader.destroy(user.avatar.public_id);
    const file = getDataUri(req.file);
    const image = await cloudinary.v2.uploader.upload(file.content);
    avatar = {
      url: image.secure_url,
      public_id: image.public_id,
    };
  }
  const updated = await User.findByIdAndUpdate(id, {
    avatar,
    updatedAt: Date.now(),
  });
  res.status(201).json({ updated });
});
