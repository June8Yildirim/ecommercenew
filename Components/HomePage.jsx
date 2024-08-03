import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyle } from "../assets/sytles";
import Header from "./ui/Header";
import SearchButton from "./ui/Buttons/SearchButton";
import { CategoryButton } from "./ui/Buttons/CategoryButton";
import SearchModal from "./ui/SearchModal";
import ProductCard from "./ui/ProductCard";
import Footer from "./ui/Footer";
import { Heading } from "./ui/Heading";
import { useSetCategories } from "../utils/hooks/useProduct";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/store/actions/product/get";

export default function HomePage() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [category, setCategory] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    const interval = setTimeout(() => {
      dispatch(
        getAllProducts({ query: searchQuery, category: category.category }),
      );
    }, 500);
    return () => {
      clearTimeout(interval);
    };
  }, [searchQuery, category, isFocused, dispatch]);

  useSetCategories(setCategories, isFocused);
  const onPressHandler = (item) => {
    setCategory(item);
  };

  return (
    <View style={defaultStyle}>
      <Header emptyCart={false} />
      <View style={styles.innerContainer}>
        <Heading />
        <SearchButton setIsSearching={setIsSearching} />
      </View>
      <View>
        <FlatList
          data={categories}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <CategoryButton
              title={item.category}
              index={index}
              id={item.id}
              category={category}
              onPress={() => onPressHandler(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {isSearching && (
        <SearchModal products={products} setSearchQuery={setSearchQuery} />
      )}
      <View style={{ flex: 1 }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item._id}
          renderItem={(i) => <ProductCard index={i} item={i.item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    alignItems: "center",
  },
});
