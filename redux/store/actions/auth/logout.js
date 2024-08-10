import axios from "axios";
import { baseURL } from "../../../../axios/api";
import { useNavigation } from "@react-navigation/native";

export const logout = () => async (dispatch) => {
  let isLogout = true;
  try {
    dispatch({ type: "logoutRequest" });

    const { data } = await axios.get(`${baseURL}/auth/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({ type: "logoutSuccess", payload: data.message });
    return isLogout;
  } catch (error) {
    dispatch({ type: "logoutFailed", payload: error.response.data.message });
    isLogout = false;
    return isLogout;
  }
};
