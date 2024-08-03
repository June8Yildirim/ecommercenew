import { StyleSheet, Text, View } from "react-native";
import { light } from "../../assets/Colors";
import React from "react";
import PriceTags from "./PriceTags";

const CostDisplayer = ({ subTotal, shippingPrice, tax, totalCost }) => {
  return (
    <View style={styles.amountContainer}>
      <PriceTags heading={"SubTotal"} amount={subTotal} />
      <PriceTags heading={"Shipping"} amount={shippingPrice} />
      <PriceTags heading={"Tax"} amount={tax} />
      <PriceTags heading={"Total"} amount={totalCost} />
    </View>
  );
};

export default CostDisplayer;

const styles = StyleSheet.create({
  amountContainer: {
    backgroundColor: light[400],
    marginBottom: 40,
    paddingVertical: 10,
  },
});
