import { createReducer } from "@reduxjs/toolkit";
import { print } from "../../../utils/print";
export const orderReducer = createReducer(
  {
    orders: [],
    adminOrders: [],
  },
  (builder) => {
    builder
      .addCase("createOrderRequest", (state) => {
        state.isLoading = true;
      })
      .addCase("getAdminOrdersRequest", (state) => {
        state.isLoading = true;
      })
      .addCase("getUserOrdersRequest", (state) => {
        state.isLoading = true;
      });
    builder.addCase("updateOrderRequest", (state) => {
      state.isLoading = true;
    });
    builder
      .addCase("createOrderSuccess", (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase("getAdminOrdersSuccess", (state, action) => {
        state.isLoading = false;
        print(action.payload);
        state.adminOrders = action.payload.orders;
      })
      .addCase("getUserOrdersSuccess", (state, action) => {
        state.isLoading = false;
        state.orders = action.payload.orders;
      })
      .addCase("updateOrderSuccess", (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      });
    builder
      .addCase("createOrderFailure", (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase("getUserOrdersFailure", (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase("getAdminOrdersFailure", (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase("updateOrderFailure", (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
);
