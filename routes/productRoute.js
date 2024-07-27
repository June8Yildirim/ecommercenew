import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductDetails,
  updateProduct,
  addNewImages,
  updateImage,
  deleteImage,
  getAdminProducts,
} from "../controllers/productController.js";
import { isAdmin, isAuthenticated } from "../middleware/authenticated.js";
import { singleUpload } from "../middleware/multer.js";
const router = express.Router();

router.post("/new", isAuthenticated, isAdmin, createProduct);
router.get("/", getAllProducts);
router.get("/admin", isAuthenticated, isAdmin, getAdminProducts);

router
  .route("/:id")
  .get(getProductDetails)
  .patch(isAuthenticated, isAdmin, updateProduct)
  .delete(isAuthenticated, isAdmin, deleteProduct);

router
  .route(":id/images")
  .post(isAuthenticated, isAdmin, singleUpload, addNewImages)
  .patch(isAuthenticated, isAdmin, singleUpload, updateImage)
  .delete(isAuthenticated, isAdmin, deleteImage);
export default router;
