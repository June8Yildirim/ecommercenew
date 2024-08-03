import { createReducer } from "@reduxjs/toolkit";
export const productReducer = createReducer(
  {
    products: [],
    product: {},
  },
  (builder) => {
    builder.addCase("getAllProductsRequest", (state) => {
      state.isLoading = true;
    });
    builder.addCase("createProductRequest", (state) => {
      state.isLoading = true;
    });
    builder.addCase("getUpdateProductRequest", (state) => {
      state.isLoading = true;
    });
    builder.addCase("getProductRequest", (state) => {
      state.isLoading = true;
    });
    builder.addCase("getAdminProductsRequest", (state) => {
      state.isLoading = true;
    });
    builder.addCase("getAllProductsSuccess", (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
    });
    builder.addCase("createProductSuccess", (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    });
    builder.addCase("getAdminProductsSuccess", (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
      state.stock = action.payload.stock;
      state.outStock = action.payload.outStock;
    });
    builder.addCase("getProductSuccess", (state, action) => {
      state.isLoading = false;
      state.product = action.payload.product;
    });
    builder.addCase("getUpdateProductSuccess", (state, action) => {
      state.isLoading = false;
      state.product = action.payload.product;
    });
    builder.addCase("getAllProductsFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase("createProductFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase("getProductFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase("getUpdateProductFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase("getAdminProductsFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase("clearError", (state, action) => {
      state.error = null;
    });
    builder.addCase("clearMessage", (state) => {
      state.message = null;
    });
  },
);
