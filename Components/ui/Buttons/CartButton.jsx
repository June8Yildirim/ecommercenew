import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { light } from "../../../assets/Colors";
import { Avatar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { print } from "../../../utils/print";

const CartButton = ({ emptyCart }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const itemCount = cartItems.orderItems?.length;
  const navigation = useNavigation();
  const route = useRoute();
  const emptyCartHandler = () => {
    dispatch({ type: "clearCart" });
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={emptyCart ? emptyCartHandler : () => navigation.navigate("cart")}
    >
      <Avatar.Icon
        icon={emptyCart ? "delete-outline" : "cart-outline"}
        color={route.name === "productdetails" ? light[200] : light[500]}
        size={50}
        style={{ backgroundColor: light[100] }}
      />
      {cartItems && <Text style={styles.text}>{itemCount}</Text>}
    </TouchableOpacity>
  );
};

export default CartButton;
const styles = StyleSheet.create({
  text: {
    fontFamily: "poppins-light",
    fontSize: 13,
  },
  container: {
    position: "absolute",
    right: 20,
    top: 40,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
