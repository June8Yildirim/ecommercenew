import { View, Text } from "react-native";
import React from "react";
import AdminPage from "../../Components/AdminPage";

export default function AdminScreen({ route, navigation }) {
  return <AdminPage route={route} navigation={navigation} />;
}
