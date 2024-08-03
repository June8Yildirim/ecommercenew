import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { light } from "../../../assets/Colors";
import { Avatar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        left: 20,
        top: 40,
        zIndex: 10,
      }}
      onPress={() => navigation.goBack()}
    >
      <Avatar.Icon
        icon={"arrow-left"}
        color={route.name === "productdetails" ? light[200] : light[500]}
        size={50}
        style={{ backgroundColor: light[100] }}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
