import { chestnut, light } from "./Colors";

import { StyleSheet, Platform, StatusBar } from "react-native";

export const defaultStyle = StyleSheet.create({
  padding: 35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: light[100],
});

export const inputStyle = StyleSheet.create({
  height: 50,
  backgroundColor: light[100],
  marginVertical: 10,
  marginHorizontal: 20,
});
