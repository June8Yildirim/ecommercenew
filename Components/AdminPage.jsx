import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { Loader } from "./ui/Loader";
import { light, flame } from "../assets/Colors";
import { products } from "./HomePage";
import SquareButton from "./ui/Buttons/SquareButton";
import ProductListHeading from "./ProductHeading";
import AdminProductCard from "./ui/AdminProductCard";
import Header from "./ui/Header";
import ChartsPage from "./Charts";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdminProducts } from "../redux/store/actions/product/get";
import { useIsFocused } from "@react-navigation/native";
import { print } from "../utils/print";
const data = [
  {
    name: "In Stock",
    population: 20,
    color: flame[300],
    legendFontColor: "#7F7F7F",
  },
  {
    name: "Out of Stock",
    population: 5,
    color: flame[500],
    legendFontColor: "#7F7F7F",
  },
];
const AdminPage = ({ route, navigation }) => {
  const { products, isLoading } = useSelector((state) => state.product);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdminProducts());
  }, [isFocused, dispatch]);
  return (
    <View style={{ ...defaultStyle, padding: 20 }}>
      <Header back={true} />
      <View style={{ marginTop: 60 }}>
        <ChartsPage data={data} />
        <Text style={styles.headerText}>Admin Panel</Text>
      </View>
      {isLoading ? (
        <Loader color={"red"} size={30} />
      ) : (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <SquareButton
              icon={"plus"}
              title={"Product"}
              onPress={() => navigation.navigate("createproduct")}
            />
            <SquareButton
              icon={"format-list-bulleted-square"}
              title={"All Orders"}
              reverse={true}
              onPress={() => navigation.navigate("adminorders")}
            />
            <SquareButton
              icon={"plus"}
              title={"Category"}
              onPress={() => navigation.navigate("createcategory")}
            />
          </View>
          <ProductListHeading />
          <FlatList
            data={products}
            contentContainerStyle={{ marginVertical: 5 }}
            keyExtractor={(item) => item._id}
            renderItem={(i) => <AdminProductCard index={i} item={i.item} />}
          />
        </View>
      )}
    </View>
  );
};

export default AdminPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: light[100],
    borderRadius: 20,
    height: 400,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  headerText: {
    backgroundColor: flame[900],
    height: 50,
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 5,
    verticalAlign: "middle",
    borderRadius: 7,
    marginTop: 10,
  },
});
