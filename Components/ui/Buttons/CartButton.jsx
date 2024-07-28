import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { chestnut, light, liver } from "../../../assets/Colors";
import { Avatar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

const CartButton = ({ emptyCart }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const emptyCartHandler = () => {};
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        right: 20,
        top: 40,
        zIndex: 10,
      }}
      onPress={emptyCart ? emptyCartHandler : () => navigation.navigate("cart")}
    >
      <Avatar.Icon
        icon={emptyCart ? "delete-outline" : "cart-outline"}
        color={route.name === "productdetails" ? liver[200] : liver[500]}
        size={50}
        style={{ backgroundColor: light[100] }}
      />
    </TouchableOpacity>
  );
};

export default CartButton;
