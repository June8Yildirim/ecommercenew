import axios from "axios";
import { baseURL } from "../../../../axios/api";
import Toast from "react-native-toast-message";
import { print } from "../../../../utils/print";

export const createCategory = async (newCategory) => {
  try {
    const { data } = await axios.post(
      `${baseURL}/category`,
      { category: newCategory },
      {
        withCredentials: true,
      },
    );
    print(data);
    return data;
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Category error",
      text2: error.response?.data.message,
    });
  }
};
