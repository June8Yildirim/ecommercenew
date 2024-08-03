import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import Header from "./ui/Header";
import GeneralButton from "./ui/Buttons/GeneralButton";
import CartItem from "./ui/CartItem";
import { Heading } from "./ui/Heading";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import { print } from "../utils/print";

const CartPage = () => {
  const [updatedQty, setUpdatedQty] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { cartItems } = useSelector((state) => state.cart);
  const decrementBtnHandler = (item) => {
    if (updatedQty === 0) {
      setTimeout(() => {
        navigation.navigate("home");
      }, 1000);
      return dispatch({ type: "removeFromCart", payload: item.id });
    }
    dispatch({
      type: "addToCart",
      payload: item,
    });
  };
  const incrementBtnHandler = (item) => {
    if (item.stock <= item.quantity) {
      Toast.show({
        type: "error",
        text1: "Stock Error",
        text2: "There is not enough item in the stock",
      });
    } else {
      dispatch({ type: "addToCart", payload: item });
    }
  };
  const hasCarts = cartItems.orderItems && cartItems.orderItems.length === 0;
  const checkoutHandler = () => {
    navigation.navigate("confirmOrder");
  };

  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      <Header back={true} emptyCart={true} />
      <Heading text2="Cart" containerStyle={styles.containerStyle} />
      {hasCarts === undefined ? (
        <View style={styles.emptyCart}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "condensedBold",
              fontSize: 30,
              fontFamily: "poppins-bold",
            }}
          >
            There is no item in the carts
          </Text>
        </View>
      ) : (
        <View style={{ paddingVertical: 20, flex: 1 }}>
          <ScrollView>
            {cartItems.orderItems.map((cart, index) => (
              <CartItem
                key={cart.id}
                idx={index}
                price={cart.price}
                name={cart.name}
                image={cart.image}
                quantity={cart.quantity}
                stock={cart.stock}
                id={cart.id}
                incrementBtn={incrementBtnHandler}
                decrementBtn={decrementBtnHandler}
              />
            ))}
          </ScrollView>
          <GeneralButton
            icon="cart"
            title="Checkout"
            onPress={checkoutHandler}
          />
        </View>
      )}
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 60,
    marginLeft: 30,
  },
  emptyCart: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginHorizontal: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 5,
    margin: 30,
  },
});
