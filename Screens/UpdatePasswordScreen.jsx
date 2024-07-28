import { View, Text } from "react-native";
import React from "react";
import UpdatePasswordPage from "../Components/UpdatePasswordPage";

export default function UpdatePasswordScreen({ route, navigation }) {
  const password = "3123asdfad";
  return (
    <UpdatePasswordPage
      password={password}
      route={route}
      navigation={navigation}
    />
  );
}
