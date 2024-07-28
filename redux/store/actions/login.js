import axios from "axios";
import { baseURL } from "../../../axios/api";

export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(`${baseURL}/auth`, user, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("login", JSON.stringify(data, null, 4));
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFailed", payload: error.response.data.message });
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
    console.log("loadUser", JSON.stringify(data, null, 4));
    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFailure", payload: error.response.data.message });
  }
};
