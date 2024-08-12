import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import Header from "./ui/Header";
import { flame, light } from "../assets/Colors";
import Footer from "./ui/Footer";
import OrderItem from "./ui/OrderItem";
import { useDispatch, useSelector } from "react-redux";
import HeaderTitle from "./ui/HeaderTitle";
import RegularButton from "./ui/Buttons/RegularButton";
import { createOrder } from "../redux/store/actions/orders/post";
import CostDisplayer from "./ui/CostDisplayer";
import { print } from "../utils/print";

const OrdersPage = ({ navigation }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { orderItems, paymentType, tax, shippingPrice, totalCost, subTotal } =
    cartItems;
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const btnText = isAuthenticated ? "Submit Order" : "Login";
  const dispatch = useDispatch();
  const orderHandler = () => {
    if (!isAuthenticated) {
      return navigation.navigate("login");
    } else {
      dispatch(
        createOrder({
          orderItems: orderItems,
          address: user?.address,
          shippingPrice,
          subTotal,
          deliveryCompany: "Canada Post",
          totalCost,
          tax,
          paymentType,
        }),
      );
    }
  };
  return (
    <View style={[defaultStyle, styles.container]}>
      <Header back={true} hasCard={false} />
      <HeaderTitle header={"Orders"} style={{ marginTop: 70 }} />
      <FlatList
        data={cartItems.orderItems}
        keyExtractor={(item) => item.id}
        style={{ marginBottom: 10 }}
        renderItem={({ item, index }) => (
          <OrderItem
            idx={index}
            address={user?.address}
            price={item.price}
            orderAt={Date.now()}
            status={"Processing"}
            id={item.id}
            isAuthenticated={isAuthenticated}
          />
        )}
      />
      <View style={{}}>
        <CostDisplayer
          subTotal={subTotal}
          shippingPrice={shippingPrice}
          tax={tax}
          totalCost={totalCost}
        />
        <RegularButton
          containerStyle={styles.btnContainer}
          textStyle={styles.btnText}
          title={btnText}
          onPress={orderHandler}
        />
      </View>
    </View>
  );
};

export default OrdersPage;

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

// const orders = [
//   {
//     id: "fvxv",
//     address: "23423 fasdfasd",
//     orderAt: "12-2-2023",
//     price: 231,
//     status: "Paid",
//     paymentInfo: "Cash",
//   },
//   {
//     id: "fafafa",
//     address: "23423 fasdfasd",
//     orderAt: "12-2-2023",
//     price: 231,
//     status: "Processing",
//     paymentInfo: "Online",
//   },
// ];
