import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextBox from "./TextBox";
import { flame, light } from "../../assets/Colors";

const OrderItem = ({
  orders,
  idx,
  address,
  orderAt,
  paymentStatus,
  orderStatus,
  id,
  price,
}) => {
  //TODO: add product details
  return (
    <View style={{ marginVertical: 10 }}>
      <Text
        style={[
          styles.id,
          {
            backgroundColor: idx % 2 !== 0 ? flame[700] : flame[200],
          },
        ]}
      >
        ID:{id}
      </Text>
      <View
        style={[
          styles.container,
          {
            backgroundColor: idx % 2 === 0 ? flame[900] : light[400],
            borderColor: idx % 2 !== 0 ? flame[900] : flame[200],
          },
        ]}
      >
        <TextBox idx={idx} title={"Address"} value={address} />
        <TextBox idx={idx} title={"Ordered On"} value={orderAt} />
        <TextBox idx={idx} title={"Price"} value={price} />
        <TextBox idx={idx} title={"Payment Status"} value={paymentStatus} />
        <TextBox idx={idx} title={"Order Status"} value={orderStatus} />
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 2,
    elevation: 10,
  },
  id: {
    fontSize: 12,
    fontFamily: "poppins-semibold",
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingVertical: 10,
    color: light[100],
  },
});
