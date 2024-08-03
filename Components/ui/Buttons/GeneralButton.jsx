import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { flame, light } from "../../../assets/Colors";
import { Loader } from "../Loader";

const GeneralButton = ({
  icon,
  title,
  onPress,
  containerStyle,
  textStyle = "",
  size = 30,
  disabled = false,
  isLoading = false,
}) => {
  //FIX: isLoading not working
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.addCartContainer, containerStyle]}
      disabled={disabled}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <Avatar.Icon
          icon={icon}
          color={light[100]}
          size={size}
          style={{ backgroundColor: flame[200] }}
        />
      )}
      <Text style={[styles.addCartText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GeneralButton;

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
