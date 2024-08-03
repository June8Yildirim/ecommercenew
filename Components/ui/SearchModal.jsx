import {
  BackHandler,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { Headline, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { light } from "../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
import SearchItem from "./SearchItem";

const SearchModal = ({ setSearchQuery, products }) => {
  const navigatiton = useNavigation();
  const backAction = () => {
    setSearchQuery("");
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Searchbar
          placeholder="Search Item"
          onChangeText={setSearchQuery}
          style={styles.searchBar}
        />
        <ScrollView>
          <View style={styles.productsContainer}>
            {products.map((product) => (
              <SearchItem
                key={product.id}
                price={product.price}
                name={product.name}
                image={product.images[0]}
                handler={() =>
                  navigatiton.navigate("productdetails", { id: product.id })
                }
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 100,
    backgroundColor: light[200],
  },
  searchBar: {
    backgroundColor: light[100],
    height: 50,
    width: "90%",
  },
});
