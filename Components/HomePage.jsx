import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import Header from "./ui/Header";
import SearchButton from "./ui/Buttons/SearchButton";
import { CategoryButton } from "./ui/Buttons/CategoryButton";
import SearchModal from "./ui/SearchModal";
import ProductCard from "./ui/ProductCard";
import Footer from "./ui/Footer";
import { Heading } from "./ui/Heading";

export const products = [
  {
    name: "Ipad Air",
    price: 999,
    images: [
      {
        url: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 2,
      },
    ],
    productId: "air1",
    stock: 4,
    description:
      "When rendering a large number of elements, you can use the 'windowSize' property to control how many items of the current element are rendered. The default is full rendering. After testing without this property, frames will drop when rendering 200 empty views. After setting this property, rendering 1000 empty views is still smooth. (The specific number depends on the phone model tested) ",
    category: "Electronics",
    quantity: 2,
  },
  {
    name: "Macbook Air",
    price: 1600,
    images: [
      {
        url: "https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 1,
      },
    ],
    category: "Electronics",
    description:
      "When rendering a large number of elements, you can use the 'windowSize' property to control how many items of the current element are rendered. The default is full rendering. After testing without this property, frames will drop when rendering 200 empty views. After setting this property, rendering 1000 empty views is still smooth. (The specific number depends on the phone model tested) ",
    productId: "macAir",
    stock: 4,
    quantity: 1,
  },
  {
    name: "Ipad Pro13",
    description:
      "When rendering a large number of elements, you can use the 'windowSize' property to control how many items of the current element are rendered. The default is full rendering. After testing without this property, frames will drop when rendering 200 empty views. After setting this property, rendering 1000 empty views is still smooth. (The specific number depends on the phone model tested) ",
    price: 1299,
    images: [
      {
        url: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 2,
      },
    ],
    productId: "ipad13",
    category: "Electronics",
    stock: 14,
    quantity: 2,
  },
  {
    name: "Macbook",
    description:
      "When rendering a large number of elements, you can use the 'windowSize' property to control how many items of the current element are rendered. The default is full rendering. After testing without this property, frames will drop when rendering 200 empty views. After setting this property, rendering 1000 empty views is still smooth. (The specific number depends on the phone model tested) ",
    price: 1299,
    images: [
      {
        url: "https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 1,
      },
    ],
    productId: "mac",
    category: "Electronics",
    stock: 4,
    quantity: 1,
  },
  {
    name: "Macbook Pro",
    price: 3299,
    description:
      "When rendering a large number of elements, you can use the 'windowSize' property to control how many items of the current element are rendered. The default is full rendering. After testing without this property, frames will drop when rendering 200 empty views. After setting this property, rendering 1000 empty views is still smooth. (The specific number depends on the phone model tested) ",
    images: [
      {
        url: "https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: 1,
      },
    ],
    productId: "macpro",
    category: "Electronics",
    stock: 4,
    quantity: 1,
  },
  {
    title: "Macbook Air",
    price: 1000,
    productId: "air2",
    stock: 23,
    description:
      "When rendering a large number of elements, you can use the 'windowSize' property to control how many items of the current element are rendered. The default is full rendering. After testing without this property, frames will drop when rendering 200 empty views. After setting this property, rendering 1000 empty views is still smooth. (The specific number depends on the phone model tested) ",
    category: "Electronics",
    images: [
      {
        id: 0,
        url: "https://picsum.photos/id/11/200/300",
      },
      {
        id: 1,
        url: "https://picsum.photos/id/10/200/300",
      },
      {
        id: 2,
        url: "https://picsum.photos/id/12/200/300",
      },
    ],
  },
];
export default function HomePage() {
  const [category, setCategory] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    {
      name: "Home Electronics",
      id: "el1",
    },
    {
      name: "Computer",
      id: "comp1",
    },
    {
      name: "Games",
      id: "gam1",
    },
    {
      name: "Movies",
      id: "mov1",
    },
    {
      name: "Books",
      id: "boo1",
    },
    {
      name: "Clothing",
      id: "cl1",
    },
  ];
  const onPressHandler = (item) => {
    setCategory(item);
  };

  const onChangeTextHandler = (query) => {
    setSearchQuery(query);
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
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CategoryButton
              title={item}
              category={category}
              onPress={() => onPressHandler(item)}
            />
          )}
          horizontal
        />
      </View>
      {isSearching && (
        <SearchModal
          products={products}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      )}
      <View style={{ flex: 1 }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
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
