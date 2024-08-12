import {
  Dimensions,
  FlatList,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { defaultStyle } from "../assets/sytles";
import Header from "./ui/Header";
import { flame, light } from "../assets/Colors";
import Footer from "./ui/Footer";
import OrderItem from "./ui/OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { getUserOrders } from "../redux/store/actions/orders/get";
import { print } from "../utils/print";
import HeaderTitle from "./ui/HeaderTitle";

const dimensions = Dimensions.get("screen");
const { height } = dimensions;
const org_height = height * 0.6;

const AdminOrdersPage = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { adminOrders, isLoading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getUserOrders("admin"));
  }, [dispatch, isFocused, isRefreshing]);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  }, []);
  const emptyOrders = () => {
    return <Text>No Orders Found</Text>;
  };
  //TODO: Add filter mechanism by user, product and date.
  return (
    <View style={{ ...defaultStyle, backgroundColor: light[100] }}>
      <Header hasCard={false} back={true} />

      <HeaderTitle
        header={"All Orders"}
        textstyle={{ backgroundColor: light[900] }}
        style={{ marginTop: 70 }}
      />
      <FlatList
        style={{ height: org_height, flexGrow: 0 }}
        data={adminOrders}
        keyExtractor={(item) => item._id}
        refreshing={isRefreshing}
        ListEmptyComponent={emptyOrders}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            title="Refreshing"
            tintColor={"green"}
            titleColor={"blue"}
            colors={["red", "green", "blue"]}
          />
        }
        renderItem={({ item, index }) => (
          <OrderItem
            idx={index}
            orders={item.orderItems}
            paymentStatus={item.paymentStatus}
            orderStatus={item.orderStatus}
            address={item.address}
            orderAt={item.createdAt}
            price={item.totalCost}
            id={item._id}
            delivery={item.deliveryCompany}
            owner={item.owner.email}
            items={item.orderItems}
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
