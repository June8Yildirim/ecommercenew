import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import Header from "./ui/Header";
import HeaderTitle from "./ui/HeaderTitle";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import { useDispatch, useSelector } from "react-redux";
import CostDisplayer from "./ui/CostDisplayer";
import { createOrder } from "../redux/store/actions/orders/post";

const CheckoutPage = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { orderItems, paymentType, tax, shippingPrice, totalCost, subTotal } =
    cartItems;
  const address = `${user.address} usercity\n${user.state} ${user.zipCode} ${user.country}  `;
  //TODO: usercard object create in db
  //FIX: server did not recieve a request
  const [deliveryCompany, setDeliveryCompany] = useState([
    "FedEx",
    "UPS",
    "DHL",
    "Canada Post",
  ]);

  //TODO implement delivery company api find an api
  const orderHandler = () => {
    dispatch(
      createOrder({
        orderItems: orderItems,
        address: user?.address,
        shippingPrice,
        subTotal,
        deliveryCompany,
        totalCost,
        tax,
        paymentType,
      }),
    );
  };
  return (
    <View style={[defaultStyle, styles.container]}>
      <Header back={true} hasCard={false} />
      <HeaderTitle header={"Checkout"} style={{ marginTop: 70 }} />
      <ScrollView>
        <View style={styles.whiteBackground}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>{user.name}</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 10, color: flame[500] }}>Change</Text>
            </TouchableOpacity>
          </View>
          <Text>{address}</Text>
        </View>
        <View style={styles.whiteBackground}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Payment</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 10, color: flame[500] }}>Change</Text>
            </TouchableOpacity>
          </View>
          <Text>{address}</Text>
        </View>
        <View style={styles.whiteBackground}>
          <Text>Delivery Company</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {deliveryCompany.map((company) => (
              <TouchableOpacity onPress={() => setDeliveryCompany(company)}>
                <Text style={{ fontSize: 10, color: flame[500] }}>
                  {company}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <CostDisplayer
        subTotal={subTotal}
        shippingPrice={shippingPrice}
        tax={tax}
        totalCost={totalCost}
      />
      <GeneralButton
        title={"Submit Order"}
        icon={"credit-card-outline"}
        containerStyle={styles.btnContainerStyle}
        size={40}
        onPress={orderHandler}
      />
    </View>
  );
};

export default CheckoutPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: light[300],
  },
  whiteBackground: {
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: light[100],
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
