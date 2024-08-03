import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./store/reducers/userReducer";
import { productReducer } from "./store/reducers/productReducer";
import { orderReducer } from "./store/reducers/orderReducer";
import { cartReducer } from "./store/reducers/cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: userReducer,
    product: productReducer,
    order: orderReducer,
  },
});
