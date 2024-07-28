import axios from "axios";
import { baseURL } from "../../../axios/api";

export const logout = (user) => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    // axios.defaults.withCredentials=true
    const { data } = await axios.get(`${baseURL}/auth/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "logoutSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "logoutFailed", payload: error.response.data.message });
  }
};
