import { StyleSheet, FlatList, View, Text } from "react-native";
import React, { useEffect } from "react";
import Header from "./ui/Header";
import HeaderTitle from "./ui/HeaderTitle";
import { defaultStyle } from "../assets/sytles";
import OrderItem from "./ui/OrderItem";
import { light, flame } from "../assets/Colors";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserOrderDetails,
  getUserOrders,
} from "../redux/store/actions/orders/get";
import { print } from "../utils/print";
import Footer from "./ui/Footer";

export const OrderHistoryPage = ({ route, navigation }) => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
    // if (orders) {
    //   orders.forEach((item) => dispatch(getUserOrderDetails(item._id)));
    // }
  }, [dispatch]);

  const { orderDetails } = useSelector((state) => state.order);
  return (
    <View style={[defaultStyle, styles.container]}>
      <Header back={true} />
      <HeaderTitle header={"Orders History"} style={{ marginTop: 70 }} />
      <FlatList
        data={orders}
        keyExtractor={(item) => item.ID}
        renderItem={({ item, index }) => (
          <OrderItem
            idx={index}
            orders={item.orderItems}
            paymentStatus={item.paymentStatus}
            orderStatus={item.orderStatus}
            address={item.address}
            orderAt={item.createdAt}
            id={item.id}
          />
        )}
      />
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: light[100],
  },
  btnContainer: {
    backgroundColor: flame[200],
    width: "100%",
  },
  btnText: {
    color: light[100],
  },
});
