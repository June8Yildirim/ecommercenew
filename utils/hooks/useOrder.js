import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

export const useOrder = (navigation, dispatch, path) => {
  const { error, isLoading, message } = useSelector(
    (state) => state.orderItems,
  );
  useEffect(() => {
    if (error) {
      Toast.show({ type: "error", text1: "Failed fetch order", text2: error });
      dispatch({ type: "clearError" });
    }
    if (message) {
      Toast.show({ type: "success", text1: message });
      dispatch({ type: "clearMessage" });
      if (path) {
        console.log("============");
        navigation.reset({ index: 0, routes: [{ name: path }] });
      }
    }
  }, [error, message, dispatch]);

  return isLoading;
};
