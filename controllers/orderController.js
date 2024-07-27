import { asyncErrorHandler } from "../middleware/Error.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { stripe } from "../app.js";

export const createOrder = asyncErrorHandler(async (req, res, next) => {
  const { id: userId } = req.user;

  if (!userId) return next(new ErrorHandler("User id does not find"), 403);
  const { orderItems, subTotal, shippingPrice, totalCost, address } = req.body;
  if (!orderItems || !subTotal || !shippingPrice || !totalCost || !address)
    return next(
      new ErrorHandler(
        "Please provide necessary fields to create new order",
        403,
      ),
    );

  if (!userId)
    return next(new ErrorHandler("The owner of order does not provided"), 403);

  let product = undefined;
  for (const item of orderItems) {
    const { productId } = item;
    product = await Product.findById(productId);
    if (!product)
      return next(
        new ErrorHandler("The owner of order does not provided"),
        403,
      );
    const { stock, quantity } = product;
    if (stock < 1)
      return next(new ErrorHandler("There is not enough stock in inventory."));

    //Reduce from stock
    product.stock -= quantity;
    product.save();
  }
  const order = await Order.create({
    owner: userId,
    ...req.body,
    lastUpdatesStatus: [{ date: Date.now(), lastStatus: "Preparing" }],
  });

  res.status(201).json({
    message: "Orders created",
    orderStatus: order.orderStatus,
    paymentStatus: order.paymentStatus,
  });
});

export const getAdminOrders = asyncErrorHandler(async (req, res, next) => {
  const orders = await Order.find({}).populate("Product").populate("User");
  res.status(200).json({ orders });
});
export const getAllOrders = asyncErrorHandler(async (req, res, next) => {
  const { id: userId } = req.user;
  const orders = await Order.find({ owner: userId }).populate("Product"); //.populate("User");
  res.status(200).json({ orders });
});

export const getOrderDetails = asyncErrorHandler(async (req, res, next) => {
  const { id: userId } = req.user;
  const { id } = req.params;
  if (!id) return next(new ErrorHandler("Order id not provided"), 403);
  const order = await Order.findById(id);
  if (!order) return next(new ErrorHandler("Order does not found"), 403);
  res.status(200).json({ order });
});

//TODO: look for it again
export const updateOrder = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const { orderItems } = req.body;
  const { paymentType } = req.body;
  const { paymentStatus } = req.body;
  if (!id) return next(new ErrorHandler("Order id not provided"), 403);
  const order = await Order.findById(id);
  if (!order) return next(new ErrorHandler("Order does not found"), 403);
  const subTotal = order.subTotal + price;
  const updatedOrder = await Order.findByIdAndUpdate(id, {
    ...req.body,
    subTotal,
    $push: {
      orderItems,
      lastUpdatesStatus: {
        date: Date.now(),
        lastStatus: paymentStatus,
      },
    },
  });

  res.status(201).json({ updatedOrder });
});
export const deleteOrder = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new ErrorHandler("Order id not provided"), 403);
  const order = await Order.findById(id);
  if (!order) return next(new ErrorHandler("Order does not found"), 403);
  await Order.findByIdAndDelete(id);
  res.status(201).json({ message: "Order is removed successfully" });
});
export const processOrder = asyncErrorHandler(async (req, res, next) => {
  const orders = await Order.find({}).populate("Product").populate("User");
  res.status(200).json({ orders });
});
export const processPayment = asyncErrorHandler(async (req, res, next) => {
  const { totalAmount } = req.body;
  const { client_secret } = await stripe.paymentIntents.create({
    amount: Number(totalAmount * 100),
    currency: "usd",
  });
  res.status(200).json({ client_secret, success: true });
});
