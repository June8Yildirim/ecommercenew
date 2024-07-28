import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import Header from "./ui/Header";
import { Heading } from "./ui/Heading";
import { RadioButton } from "react-native-paper";
import { light, flame } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
const PaymentPage = ({ route, navigation }) => {
  const { navigate } = navigation;
  const isAuthenticated = false;
  const paymentHandler = () => {
    if (!isAuthenticated) navigate("login");
  };

  const [paymentMethod, setPaymentMethod] = useState("cash");
  return (
    <View style={{ ...defaultStyle }}>
      <Header back={true} />
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
              value="cash"
              color={paymentMethod === "cash" ? "red" : "blue"}
              status={paymentMethod === "cash" ? "checked" : "unchecked"}
              onPress={() => setPaymentMethod("cash")}
            />
          </View>
          <View style={styles.btnContainer}>
            <Text style={styles.text}>Card</Text>
            <RadioButton
              value="card"
              color={paymentMethod === "card" ? "red" : "blue"}
              status={paymentMethod === "card" ? "checked" : "unchecked"}
              onPress={() => setPaymentMethod("card")}
            />
          </View>
        </RadioButton.Group>
      </View>
      <GeneralButton
        icon={
          paymentMethod === "cash" ? "check-circle" : "circle-multiple-outline"
        }
        title={paymentMethod === "cash" ? "Place Order" : "Pay"}
        onPress={paymentHandler}
      />
    </View>
  );
};

export default PaymentPage;

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 60,
  },
  text: {
    color: light[100],
    fontWeight: "semibold",
    fontSize: 18,
  },
  container: {
    backgroundColor: flame[900],
    flex: 1,
    borderRadius: 10,
    elevation: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },
});
