import { View, Text } from "react-native";
import React from "react";
import OneTimePasswordPage from "../Components/OneTimePasswordPage";

export default function OneTimePasswordScreen({ route, navigation }) {
  return <OneTimePasswordPage route={route} navigation={navigation} />;
}
