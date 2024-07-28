import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { flame, light } from "../../../assets/Colors";

const Button = ({ title, onPress, containerStyle, textStyle = {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.addCartContainer, containerStyle]}
    >
      <Text style={[styles.addCartText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  addCartContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: flame[900],
    justifyContent: "center",
    paddingVertical: 8,
    gap: 10,
    borderRadius: 10,
    marginVertical: 15,
  },
  addCartText: {
    color: light[100],
  },
});
