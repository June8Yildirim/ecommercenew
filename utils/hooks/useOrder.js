import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { getAllAdminProducts } from "../../redux/store/actions/product/get";
import { getUserOrders } from "../../redux/store/actions/orders/get";

export const useOrder = (dispatch, isFocused) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const data = dispatch(getUserOrders());
    setIsLoading(false);

    setOrders(data);
  }, [isFocused, dispatch]);

  return { isLoading, orders };
};

export const useAdminOrders = (isFocused, dispatch) => {
  const { error, products, isLoading, inStock, outOfStock } = useSelector(
    (state) => state.products,
  );
  useEffect(() => {
    if (error) {
      Toast.show({ type: "error", text1: "Failed fetch order", text2: error });
      dispatch({ type: "clearError" });
    }
    dispatch(getAllAdminProducts());
  }, [error, isFocused, , dispatch]);

  return { products, inStock, outOfStock, isLoading };
};
