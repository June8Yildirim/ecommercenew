import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { defaultStyle } from "../assets/sytles";
import Header from "./ui/Header";
import ConfirmOrderItem from "./ui/ConfirmOrderItems";
import { Heading } from "./ui/Heading";
import { cartItems } from "./CartPage";
import PriceTags from "./ui/PriceTags";
import { chestnut, flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import { useNavigation } from "@react-navigation/native";

const ConfirmOrderPage = () => {
  const navigation = useNavigation();
  const subTotal = 2000;
  const TAX_REGION = 0.15;
  const shipping = 100;
  const tax = (subTotal + shipping) * TAX_REGION;
  const total = subTotal + shipping + tax;
  return (
    <View style={{ ...defaultStyle, paddingHorizontal: 0 }}>
      <Header back={true} />
      <Heading
        containerStyle={styles.containerStyle}
        text1="Confirm"
        text2="Order"
      />
      <View style={styles.confirmContainer}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.productId}
          renderItem={({ item, index }) => (
            <ConfirmOrderItem
              price={item.price}
              idx={index}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
            />
          )}
        />
      </View>
      <View style={styles.amountContainer}>
        <PriceTags heading={"SubTotal"} amount={subTotal} />
        <PriceTags heading={"Shipping"} amount={shipping} />
        <PriceTags heading={"Tax"} amount={tax} />
        <PriceTags heading={"Total"} amount={total} />
      </View>
      <GeneralButton
        title={"Payment"}
        icon={"credit-card-outline"}
        containerStyle={styles.btnContainerStyle}
        size={40}
        onPress={() => navigation.navigate("payment")}
      />
    </View>
  );
};

export default ConfirmOrderPage;

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: flame[200],
  },
  containerStyle: { paddingTop: 60 },
  confirmContainer: {
    flex: 1,
    elevation: 3,
    shadowOpacity: 0.26,
    shadowOffset: { width: 3, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    shadowColor: light[900],
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  amountContainer: {
    backgroundColor: light[600],
  },
});
