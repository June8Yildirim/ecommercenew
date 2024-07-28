import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./store/reducers/userReducer";
export const store = configureStore({
  reducer: { auth: userReducer },
});
