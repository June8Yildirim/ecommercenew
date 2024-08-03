import { Schema, Types, model } from "mongoose";

const orderSchema = new Schema({
  orderItems: [
    {
      productId: {
        type: Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        required: [true, "Please provide order's quantity"],
      },
      price: {
        type: Number,
        required: [true, "Please provide order's price"],
      },
    },
  ],
  subTotal: {
    type: Number,
    required: [true, "Please enter Product price"],
  },
  taxPrice: {
    type: Number,
    required: [true, "Please enter Product price"],
  },
  shippingPrice: {
    type: Number,
    required: [true, "Please enter Product price"],
  },
  totalCost: {
    type: Number,
    required: [true, "Please enter Product price"],
  },
  address: {
    type: String,
    required: [true, "Please enter product delivery address"],
  },
  orderStatus: {
    type: String,
    enum: [
      "Preparing",
      "Awating Payment",
      "Awating Shipment",
      "Cancelled",
      "Completed",
      "Declined",
      "Refunded",
    ],
    default: "Preparing",
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Cancelled", "Completed", "Declined", "Refunded"],
    default: "Pending",
  },
  paymentType: {
    type: String,
    enum: ["ONLINE", "CASH"],
  },
  paidAt: Date,
  deliveryAt: Date,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  lastUpdatesStatus: [
    {
      date: {
        type: Date,
        default: Date.now(),
      },
      lastStatus: {
        type: String,
        default: "Preparing",
      },
    },
  ],
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  owner: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default model("Order", orderSchema);
