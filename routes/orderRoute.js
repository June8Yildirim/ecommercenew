import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/authenticated.js";
import { singleUpload } from "../middleware/multer.js";
import {
  createOrder,
  getAllOrders,
  getAdminOrders,
  getOrderDetails,
  updateOrder,
  deleteOrder,
  processOrder,
  processPayment,
} from "../controllers/orderController.js";
const router = express.Router();

router.post("/new", isAuthenticated, createOrder);
router.post("/payment", isAuthenticated, processPayment);
router.get("/", isAuthenticated, getAllOrders);
router
  .get("/admin", isAuthenticated, isAdmin, getAdminOrders)
  .patch(isAuthenticated, isAdmin, processOrder);

router
  .route("/:id")
  .get(isAuthenticated, getOrderDetails)
  .patch(isAuthenticated, updateOrder)
  .delete(isAuthenticated, deleteOrder);

export default router;
