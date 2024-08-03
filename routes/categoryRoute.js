import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import { isAdmin, isAuthenticated } from "../middleware/authenticated.js";
const router = express.Router();

router
  .route("/")
  .post(isAuthenticated, isAdmin, createCategory)
  .get(getAllCategories);
router
  .route("/:id")
  .get(getCategory)
  .patch(isAuthenticated, isAdmin, updateCategory)
  .delete(isAuthenticated, isAdmin, deleteCategory);
export default router;
