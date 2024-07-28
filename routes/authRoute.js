import express from "express";
import {
  createUser,
  getUserProfile,
  login,
  logOut,
  updatePassword,
  updateProfile,
  updateAvatar,
  forgetPassword,
  resetPassword,
} from "../controllers/authController.js";
import { isAuthenticated } from "../middleware/authenticated.js";
import { JwtAuthMiddleWare } from "../middleware/jwtAuth.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();
router.post("/", login);
router.post("/new", singleUpload, createUser);
router.patch("/update_password", isAuthenticated, updatePassword);
router.patch(
  "/update_profile",
  isAuthenticated,
  JwtAuthMiddleWare,
  updateProfile,
);
router.patch("updateAvatar", isAuthenticated, updateAvatar);
router.route("/forget_password").post(forgetPassword).patch(resetPassword);
router.get("/profile", isAuthenticated, getUserProfile);
router.get("/logout", logOut);

export default router;
