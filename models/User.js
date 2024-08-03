import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter user name"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minLength: [6, "Password must be more than 6 characters"],
    select: false,
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true,
    validate: validator.isEmail,
  },
  avatar: {
    public_id: String,
    url: String,
  },
  empId: String,
  role: {
    type: String,
    enum: ["admin", "user", "seller"],
    default: "user",
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  tokens: [String],
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  country: String,
  state: String,
  zipCode: String,
  oneTimePassword: Number,
  oneTimePasswordExpire: Date,
  resetPasswordToken: String,
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash(user.password, salt);

  user.password = pass;
});

// compare user's previous and current password

userSchema.methods.comparePassword = async function (enteredPassword) {
  const user = this;
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateToken = function (expires) {
  const token = jwt.sign(
    { _id: this._id, email: this.email },
    process.env.SECRET,
    {
      expiresIn: expires,
    },
  );
  return token;
};
export default model("User", userSchema);
