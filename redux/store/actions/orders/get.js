import axios from "axios";
import { baseURL } from "../../../../axios/api";

export const getUserOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getUserOrdersRequest" });
    const { data } = await axios.get(`${baseURL}/order/${id}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    dispatch({ type: "getUserOrdersSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getUserOrdersFailure",
      payload: error.response.data.message,
    });
  }
};

export const getUserOrders = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getUserOrdersRequest" });
    const { data } = await axios.get(`${baseURL}/order`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    dispatch({ type: "getUserOrdersSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getUserOrdersFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllAdminOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminProductsRequest" });

    const { data } = await axios.get(`${baseURL}/product/admin`, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({ type: "getAdminProductsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAdminProductsFailure",
      payload: error.response.data.message,
    });
  }
};
