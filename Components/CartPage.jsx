import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { defaultStyle } from "../assets/sytles";
import Header from "./ui/Header";
import GeneralButton from "./ui/Buttons/GeneralButton";
import CartItem from "./ui/CartItem";
import { Heading } from "./ui/Heading";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    name: "Ipad Air",
    price: 999,
    image: {
      url: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 2,
    },
    productId: "air1",
    stock: 4,
    quantity: 2,
  },
  {
    name: "Macbook Air",
    price: 1600,
    image: {
      url: "https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 1,
    },

    productId: "macAir",
    stock: 4,
    quantity: 1,
  },
  {
    name: "Ipad Pro13",
    price: 1299,
    image: {
      url: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 2,
    },
    productId: "ipad13",
    stock: 14,
    quantity: 2,
  },
  {
    name: "Macbook Pro",
    price: 3299,
    image: {
      url: "https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 1,
    },
    productId: "macpro",
    stock: 4,
    quantity: 1,
  },
];
const CartPage = () => {
  const containerStyle = {
    paddingTop: 60,
    marginLeft: 30,
  };
  // const cartItems = [];
  const decrementBtnHandler = (id, quantity, stock) => {
    console.log("decrementing", id, quantity, stock);
  };
  const incrementBtnHandler = (id, quantity, stock) => {
    console.log("incrementing", id, quantity, stock);
  };
  const navigation = useNavigation();
  const hasCarts = cartItems && cartItems.length === 0;
  const checkoutHandler = () => {
    navigation.navigate("confirmOrder");
  };
  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      <Header back={true} emptyCart={true} />
      <Heading text2="Cart" containerStyle={containerStyle} />
      {hasCarts ? (
        <View style={styles.emptyCart}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "condensedBold",
              fontSize: 30,
            }}
          >
            There is no item in the carts
          </Text>
        </View>
      ) : (
        <View style={{ paddingVertical: 20, flex: 1 }}>
          <ScrollView>
            {cartItems.map((cart, index) => (
              <CartItem
                key={cart.productId}
                idx={index}
                price={cart.price}
                name={cart.name}
                image={cart.image}
                quantity={cart.quantity}
                stock={cart.stock}
                id={cart.productId}
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
