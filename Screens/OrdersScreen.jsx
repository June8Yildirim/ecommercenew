import { View, Text } from "react-native";
import React from "react";
import OrdersPage from "../Components/OrdersPage";

export default function OrdersScreen({ route, navigation }) {
  return <OrdersPage navigation={navigation} />;
}
