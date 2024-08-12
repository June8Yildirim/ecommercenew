import axios from "axios";
import { useEffect } from "react";
import { baseURL } from "../../axios/api";
import Toast from "react-native-toast-message";
import { createCategory } from "../../redux/store/actions/product/post";

export const useSetCategories = (setCategories, isFocused) => {
  useEffect(() => {
    axios
      .get(`${baseURL}/category`)
      .then((res) => setCategories(res.data.categories))
      .catch((err) =>
        Toast.show({
          type: "error",
          text1: "Category error",
          text2: err.response?.data.message,
        }),
      );
  }, [isFocused]);
};
export const useUpdateCategories = (setCategories, category, isFocused) => {
  useEffect(() => {
    createCategory(category);
  }, [isFocused]);
};
