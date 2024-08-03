import axios from "axios";
import { baseURL } from "../../../../axios/api";

export const changePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: "changePasswordRequest" });

    const { data } = await axios.post(
      `${baseURL}/auth/update_password`,
      passwords,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );
    dispatch({ type: "changePasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "changePasswordFailure",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "resetPasswordRequest" });

    axios.defaults.withCredentials = true;
    const { data } = await axios.patch(
      `${baseURL}/auth/forget_password`,
      email,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );
    dispatch({ type: "resetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "resetPasswordFailure",
      payload: error.response.data.message,
    });
  }
};
export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgetPasswordRequest" });

    axios.defaults.withCredentials = true;
    const { data } = await axios.post(
      `${baseURL}/auth/forget_password`,
      email,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );
    dispatch({ type: "forgetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "forgetPasswordFailure",
      payload: error.response.data.message,
    });
  }
};
