import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

export const useAuth = (navigation, dispatch, path = "login") => {
  const { error, isLoading, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (error) {
      Toast.show({ type: "error", text1: "Failed Login", text2: error });
      dispatch({ type: "clearError" });
    }
    if (message) {
      Toast.show({ type: "success", text1: "Logged in Successfully" });
      console.log("PATH", path);
      navigation.navigate(path);
    }
  }, [error, message, dispatch]);

  console.log("useAuth isLoading", isLoading);
  return isLoading;
};
