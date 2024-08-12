import axios from "axios";
import { baseURL } from "../../../../axios/api";
import { print } from "../../../../utils/print";

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getProductRequest" });

    const { data } = await axios.get(`${baseURL}/product/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({ type: "getProductSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getProductFailure",
      payload: error.response.data.message,
    });
  }
};
export const getAllAdminProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminProductsRequest" });

    const { data } = await axios.get(`${baseURL}/product/admin`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    dispatch({ type: "getAdminProductsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAdminProductsFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllProducts =
  ({ query, category }) =>
  async (dispatch) => {
    try {
      dispatch({ type: "getAllProductsRequest" });
      const { data } = await axios.get(
        // `${baseURL}/product`,
        `${baseURL}/product?category=${category}&query=${query}`,
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      dispatch({ type: "getAllProductsSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "getAllProductsFailure",
        payload: error.response.data.message,
      });
    }
  };
