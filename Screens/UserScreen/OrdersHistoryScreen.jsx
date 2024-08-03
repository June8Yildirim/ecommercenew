import { View, Text } from "react-native";
import React from "react";
import { OrderHistoryPage } from "../../Components/OrderHistoryPage";

export default function OrderHistoryScreen({ route, navigation }) {
  return <OrderHistoryPage route={route} navigation={navigation} />;
}
