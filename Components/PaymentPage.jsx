import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import Header from "./ui/Header";
import { Heading } from "./ui/Heading";
import { RadioButton } from "react-native-paper";
import { light, flame } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import { useDispatch, useSelector } from "react-redux";
import { print } from "../utils/print";
import Footer from "./ui/Footer";

const PaymentPage = ({ route, navigation }) => {
  const [paymentMethod, setPaymentMethod] = useState("CASH");
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const paymentHandler = () => {
    if (!isAuthenticated) navigate("login");

    if (paymentMethod === "CASH") {
      dispatch({
        type: "cartPaymentType",
        payload: paymentMethod,
      });
      navigate("order");
    }
    if (paymentMethod === "CARD") {
      dispatch({
        type: "cartPaymentType",
        payload: paymentMethod,
      });
      navigate("checkout");
    }
  };

  return (
    <View style={{ ...defaultStyle }}>
      <Header back={true} hasCard={false} />
      <Heading
        text1="Payment"
        text2="Method"
        containerStyle={styles.containerStyle}
      />
      <View style={styles.container}>
        <RadioButton.Group>
          <View style={styles.btnContainer}>
            <Text style={styles.text}>Cash</Text>
            <RadioButton
              key={"cash"}
              value="cash"
              color={paymentMethod === "CASH" ? "red" : "blue"}
              status={paymentMethod === "CASH" ? "checked" : "unchecked"}
              onPress={() => setPaymentMethod("CASH")}
            />
          </View>
          <View style={styles.btnContainer}>
            <Text style={styles.text}>Card</Text>
            <RadioButton
              key={"card"}
              value="card"
              color={paymentMethod === "CARD" ? "red" : "blue"}
              status={paymentMethod === "CARD" ? "checked" : "unchecked"}
              onPress={() => setPaymentMethod("CARD")}
            />
          </View>
        </RadioButton.Group>
      </View>
      <GeneralButton
        icon={
          paymentMethod === "CASH" ? "check-circle" : "circle-multiple-outline"
        }
        title={paymentMethod === "CASH" ? "Place Order" : "Pay"}
        onPress={paymentHandler}
      />
      <Footer />
    </View>
  );
};

export default PaymentPage;

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 60,
  },
  text: {
    color: flame[500],
    padding: 5,
    fontWeight: "semibold",
    fontSize: 18,
  },
  container: {
    backgroundColor: light[700],
    borderRadius: 10,
    elevation: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    width: "90%",
    borderRadius: 8,
    flexDirection: "row",
    backgroundColor: light[100],
    justifyContent: "space-between",
    marginVertical: 30,
    alignItems: "center",
  },
});
