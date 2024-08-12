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

export const getUserOrders = (admin) => async (dispatch) => {
  try {
    admin
      ? dispatch({ type: "getAdminOrdersRequest" })
      : dispatch({ type: "getUserOrdersRequest" });

    const url = !admin ? `${baseURL}/order` : `${baseURL}/order/admin`;
    const { data } = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });
    admin
      ? dispatch({ type: "getAdminOrdersSuccess", payload: data })
      : dispatch({ type: "getUserOrdersSuccess", payload: data });
  } catch (error) {
    admin
      ? dispatch({
          type: "getAdminOrdersFailure",
          payload: error.response.data.message,
        })
      : dispatch({
          type: "getUserOrdersFailure",
          payload: error.response.data.message,
        });
  }
};

export const getAllAdminOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminOrdersRequest" });

    console.log("..........");
    const { data } = await axios.get(`${baseURL}/order/admin`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log("-------------");
    dispatch({ type: "getAdminOrdersSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAdminOrdersFailure",
      payload: error.response.data.message,
    });
  }
};
