import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "./IconButton";
import { flame, light } from "../../../assets/Colors";

const SquareButton = ({ onPress, icon, title, reverse = false }) => {
  return (
    <IconButton
      icon={icon}
      color={light[100]}
      size={60}
      title={title}
      backgroundColor={reverse ? flame[200] : flame[900]}
      style={[
        styles.button,
        { backgroundColor: reverse ? flame[200] : flame[900] },
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
