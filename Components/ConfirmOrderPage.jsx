import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import Header from "./ui/Header";
import ConfirmOrderItem from "./ui/ConfirmOrderItems";
import { Heading } from "./ui/Heading";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import { useDispatch, useSelector } from "react-redux";
import { costCalculation } from "../utils/calculation";
import CostDisplayer from "./ui/CostDisplayer";
import { print } from "../utils/print";

const ConfirmOrderPage = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const { orderItems, tax, shippingPrice, totalCost, subTotal } = cartItems;

  const orderHandler = () => {
    navigation.navigate("payment");
  };
  return (
    <View style={{ ...defaultStyle, paddingHorizontal: 0 }}>
      <Header back={true} />
      <Heading
        containerStyle={styles.containerStyle}
        text1="Order"
        text2="Summary"
      />
      <View style={styles.confirmContainer}>
        <FlatList
          data={orderItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ConfirmOrderItem
              price={item.price}
              idx={index}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
              id={item.id}
            />
          )}
        />
      </View>
      <CostDisplayer
        subTotal={subTotal}
        shippingPrice={shippingPrice}
        tax={tax}
        totalCost={totalCost}
      />
      <GeneralButton
        title={"Payment Method"}
        icon={"credit-card-outline"}
        containerStyle={styles.btnContainerStyle}
        size={40}
        onPress={orderHandler}
      />
    </View>
  );
};

export default ConfirmOrderPage;

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: flame[200],
    position: "absolute",
    bottom: 0,
  },
  containerStyle: { paddingTop: 60 },
  confirmContainer: {
    flex: 2,
    elevation: 3,
    shadowOpacity: 0.26,
    shadowOffset: { width: 3, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    shadowColor: light[900],
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
