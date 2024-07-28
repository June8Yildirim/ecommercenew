import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { flame, light } from "../assets/Colors";

const ProductListHeading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image</Text>
      <Text style={styles.text}>Price</Text>
      <Text style={styles.text}>Name</Text>
      <Text style={styles.text}>Category</Text>
      <Text style={styles.text}>Stock</Text>
    </View>
  );
};

export default ProductListHeading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: flame[900],
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    alignItems: "center",
    borderRadius: 6,
    padding: 10,
    width: "100%",
  },
  text: {
    alignSelf: "center",
    paddingHorizontal: 3,
    color: light[100],
    fontWeight: "900",
  },
});
