import { createReducer } from "@reduxjs/toolkit";
import { costCalculation } from "../../../utils/calculation";
import { print } from "../../../utils/print";
export const cartReducer = createReducer(
  {
    cartItems: {
      orderItems: [],
      tax: 0,
      subTotal: 0,
      shippingPrice: 0,
      totalCost: 0,
      paymentType: "CASH",
    },
  },
  (builder) => {
    builder.addCase("addToCart", (state, action) => {
      const item = action.payload;
      const isExist = state.cartItems.orderItems.find((i) => i.id === item.id);
      const TAX_REGION = 0.18;
      if (isExist) {
        state.cartItems.orderItems = state.cartItems.orderItems.map(
          (i, idx) =>
            (state.cartItems.orderItems[idx] = i.id === isExist.id ? item : i),
        );
        const { shipping, subTotal, tax, total } = costCalculation(
          state.cartItems.orderItems,
          TAX_REGION,
        );
        state.cartItems["tax"] = tax;
        state.cartItems["subTotal"] = subTotal;
        state.cartItems["shippingPrice"] = shipping;
        state.cartItems["totalCost"] = total;
        state.cartItems[""];
      } else {
        state.cartItems.orderItems.push(item);
        const { shipping, subTotal, tax, total } = costCalculation(
          state.cartItems.orderItems,
          TAX_REGION,
        );
        state.cartItems["tax"] = tax;
        state.cartItems["subTotal"] = subTotal;
        state.cartItems["shippingPrice"] = shipping;
        state.cartItems["totalCost"] = total;
      }
    });

    builder.addCase("cartPaymentType", (state, action) => {
      const paymentType = action.payload;
      state.cartItems["paymentType"] = paymentType;
    });
    builder.addCase("updateCart", (state, action) => {
      const item = action.payload;
      const isExist = state.cartItems.find((i) => i.id === item.id);
      if (isExist) {
        state.cartItems = state.cartItems.map(
          (i, idx) => (state.cartItems[idx] = i.id === isExist.id ? item : i),
        );
      } else {
        state.cartItems.push(item);
      }
    });
    builder.addCase("removeFromCart", (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    });
    builder.addCase("clearCart", (state, action) => {
      console.log("clearCart");
      state.cartItems.orderItems = [];
    });
  },
);
