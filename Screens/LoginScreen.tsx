import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginPage from "../Components/LoginPage";

export default function LoginScreen({ route, navigation }) {
  return <LoginPage route={route} navigation={navigation} />;
}

const styles = StyleSheet.create({});
