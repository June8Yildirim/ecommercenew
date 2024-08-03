import axios from "axios";
import { baseURL } from "../../../../axios/api";
import { print } from "../../../../utils/print";

export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.post(`${baseURL}/auth`, user, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    dispatch({ type: "loginSuccess", payload: data.message });
    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loginFailed", payload: error.response?.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    axios.defaults.withCredentials = true;
    const { data } = await axios.get(`${baseURL}/auth/profile`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      payload: error.response?.data.message,
    });
  }
};
