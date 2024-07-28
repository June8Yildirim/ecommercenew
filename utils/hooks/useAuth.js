import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

export const useAuth = (navigation, dispatch, path) => {
  console.log("PATH Out", path);
  const { error, isLoading, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (error) {
      Toast.show({ type: "error", text1: "Failed Login", text2: error });
      dispatch({ type: "clearError" });
    }
    console.log("message", message);
    if (message) {
      navigation.reset({ index: 0, routes: [{ name: path }] });
      Toast.show({ type: "success", text1: message });
      console.log("PATH", path);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, dispatch]);

  return isLoading;
};
