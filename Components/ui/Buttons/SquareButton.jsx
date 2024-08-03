import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "./IconButton";
import { flame, light } from "../../../assets/Colors";

const SquareButton = ({ isLoading, onPress, icon, title, reverse = false }) => {
  return (
    <IconButton
      icon={icon}
      color={light[100]}
      size={60}
      title={title}
      isLoading={isLoading}
      backgroundColor={reverse ? flame[500] : light[700]}
      style={[
        styles.button,
        { backgroundColor: reverse ? flame[500] : light[700] },
      ]}
      onPress={onPress}
    />
  );
};

export default SquareButton;

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
});
