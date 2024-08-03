import axios from "axios";
import { baseURL } from "../../../../axios/api";

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: "createOrderRequest" });
    console.log("order request");
    const { data } = await axios.post(`${baseURL}/order/new`, order, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log("order success", data);
    dispatch({ type: "createOrderSuccess", payload: data.order });
  } catch (error) {
    dispatch({ type: "loginFailed", payload: error.response.data.message });
  }
};
