import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const RegularButton = ({ title, onPress, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Text style={[styles.font, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RegularButton;

const styles = StyleSheet.create({
  container: {
    margin: 4,
    borderRadius: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: 80,
    height: 50,
    elevation: 10,
  },
  font: {
    fontSize: 12,
    textAlign: "center",
    padding: 10,
  },
});
