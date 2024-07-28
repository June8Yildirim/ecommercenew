import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import Header from "./ui/Header";
import { flame, light } from "../assets/Colors";
import Footer from "./ui/Footer";
import OrderItem from "./ui/OrderItem";

const AdminOrdersPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const updateHandler = () => {};
  return (
    <View style={{ ...defaultStyle, backgroundColor: light[100] }}>
      <Header back={true} />

      <View style={{ marginVertical: 30, marginVertical: 70 }}>
        <Text style={styles.headerText}>All Orders</Text>
      </View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.ID}
        renderItem={({ item, index }) => (
          <OrderItem
            admin={true}
            updateHandler={updateHandler}
            order={item}
            idx={index}
          />
        )}
      />

      <Footer />
    </View>
  );
};

export default AdminOrdersPage;

const styles = StyleSheet.create({
  headerText: {
    backgroundColor: flame[900],
    height: 50,
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 5,
    verticalAlign: "middle",
    borderRadius: 7,
  },
});

const orders = [
  {
    id: "fvxv",
    address: "23423 fasdfasd",
    orderAt: "12-2-2023",
    price: 231,
    status: "Paid",
    paymentInfo: "Cash",
  },
  {
    id: "fafafa",
    address: "23423 fasdfasd",
    orderAt: "12-2-2023",
    price: 231,
    status: "Processing",
    paymentInfo: "Online",
  },
];
