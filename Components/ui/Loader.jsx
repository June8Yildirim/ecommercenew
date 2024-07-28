import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { flame, light } from "../../assets/Colors";

export const Loader = ({ color, style, size = 20 }) => {
  return (
    <ActivityIndicator style={style} size={size} color={light[100] || color} />
  );
};
