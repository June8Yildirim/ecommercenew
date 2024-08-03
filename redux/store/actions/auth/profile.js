import axios from "axios";
import { baseURL } from "../../../../axios/api";
import { print } from "../../../../utils/print";

export const register = (user) => async (dispatch) => {
  try {
    dispatch({ type: "registerUserRequest" });
    const { data } = await axios.post(`${baseURL}/auth/new`, user, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch({ type: "registerUserSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "registerUserFailure",
      payload: error.response.data.message,
    });
  }
};
export const updateProfile = (user) => async (dispatch) => {
  try {
    dispatch({ type: "updateUserRequest" });
    print(user);
    const { data } = await axios.patch(`${baseURL}/auth/update_profile`, user, {
      withCredentials: true,
    });
    dispatch({ type: "updateUserSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateUserFailure",
      payload: error.response.data.message,
    });
  }
};
