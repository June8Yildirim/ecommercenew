import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Heading = ({
  text1 = "Our",
  text2 = "Products",
  containerStyle,
}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.shopping}>{text1}</Text>
      <Text style={styles.cart}>{text2}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  cart: {
    fontSize: 25,
    fontWeight: "bold",
  },
  shopping: {
    fontSize: 25,
  },
});
