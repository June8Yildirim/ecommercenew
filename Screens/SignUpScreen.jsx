import { View, Text } from "react-native";
import React from "react";
import SignUpPage from "../Components/SignUpPage";

export default function SignUpScreen({ route, navigation }) {
  return <SignUpPage route={route} navigation={navigation} />;
}
