import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { light } from "../../assets/Colors";

const PriceTags = ({ heading, amount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};

export default PriceTags;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 3,
    paddingHorizontal: 20,
  },
  heading: {
    fontWeight: "bold",
  },
  amount: {
    fontWeight: "condensedBold",
  },
});
