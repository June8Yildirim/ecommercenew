import { View, Text } from "react-native";
import React from "react";
import UpdateProfilePage from "../Components/UpdateProfilePage";

export default function UpdateProfileScreen({ route, navigation }) {
  const user = {
    email: "cuneyt@mail.com",
    name: "cuneyt",
    address: "215 Stillview",
    country: "Canada",
    state: "Quebec",
    zipCode: "H9R 2Y4",
  };
  return (
    <UpdateProfilePage user={user} route={route} navigation={navigation} />
  );
}
