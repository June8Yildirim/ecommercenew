import {
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Text,
  RefreshControl,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import Header from "./ui/Header";
import HeaderTitle from "./ui/HeaderTitle";
import { defaultStyle } from "../assets/sytles";
import OrderItem from "./ui/OrderItem";
import { light, flame } from "../assets/Colors";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserOrderDetails,
  getUserOrders,
} from "../redux/store/actions/orders/get";
import { print } from "../utils/print";
import Footer from "./ui/Footer";
import { Loader } from "./ui/Loader";
import { useIsFocused } from "@react-navigation/native";

const dimensions = Dimensions.get("screen");
const { height } = dimensions;
const org_height = height * 0.6;

export const OrderHistoryPage = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const { orders, isLoading } = useSelector((state) => state.order);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch, isFocused, isRefreshing]);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      console.log("refreshing false");
    }, 500);
  }, []);

  //TODO: add date filter by year
  const emptyOrders = () => {
    return <Text>No Orders Found</Text>;
  };
  return (
    <View style={[defaultStyle, styles.container]}>
      <Header hasCard={false} back={true} />
      <HeaderTitle
        header={"Orders History"}
        textstyle={{ backgroundColor: light[900] }}
        style={{ marginTop: 70 }}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          style={{ height: org_height, flexGrow: 0 }}
          data={orders}
          keyExtractor={(item) => item._id}
          refreshing={isRefreshing}
          ListEmptyComponent={emptyOrders}
          showsVerticalScrollIndicator={false}
          onRefresh={onRefresh}
          esti
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
            />
          )}
        />
      )}
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: light[100],
  },
  btnContainer: {
    backgroundColor: flame[200],
    width: "100%",
  },
  btnText: {
    color: light[100],
  },
});
