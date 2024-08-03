import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { defaultStyle } from "../assets/sytles";
import Toast from "react-native-toast-message";

import Header from "./ui/Header";
import Carousel from "react-native-snap-carousel";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetailItem } from "./ui/ProductDetailItem";
import { getProduct } from "../redux/store/actions/product/get";
import { useIsFocused } from "@react-navigation/native";
import GeneralButton from "./ui/Buttons/GeneralButton";
import IncrementDecrementButtons from "./ui/Buttons/IncrementDecrementButtons";
import { flame, light } from "../assets/Colors";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const ProductDetailsPage = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const isCarouselRef = useRef();
  const isFocused = useIsFocused();
  const { id } = route.params;
  const { product } = useSelector((state) => state.product);
  const item = {
    quantity: product.quantity,
    id: product.id,
    stock: product.stock,
    image: product.image,
    name: product.name,
    price: product.price,
  };

  const itemWidth = deviceWidth;
  const sliderWidth = deviceWidth;
  const imageHeight = deviceHeight * 0.5;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, isFocused, id]);

  const decrementBtnHandler = (item) => {
    dispatch({
      type: "addToCart",
      payload: item,
    });
    Toast.show({
      type: "success",
      text1: `Cart Item Quantity Decremented`,
      text2: `${product.name}`,
    });
  };

  const incrementBtnHandler = () => {
    if (product.stock <= product.quantity) {
      Toast.show({
        type: "error",
        text1: "Stock Error",
        text2: "There is not enough item in the stock",
      });
    } else {
      dispatch({ type: "addToCart", payload: item });
      Toast.show({
        type: "success",
        text1: `Cart Item Quantity Incremented`,
        text2: `${product.name}`,
      });
    }
  };
  const addToCartHandler = () => {
    if (product.stock === 0) {
      Toast.show({ type: "error", text1: "Out of Stock" });
    } else {
      dispatch({
        type: "addToCart",
        payload: item, //{ ...item },
      });
      Toast.show({
        type: "success",
        text1: `Added To Cart`,
        text2: `${product.name}`,
      });
    }
  };
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      <Header back={true} />
      <View
        style={[
          {
            marginVertical: 70,
          },
        ]}
      >
        <Carousel
          layout="default"
          itemWidth={itemWidth}
          data={product.images}
          sliderWidth={sliderWidth}
          renderItem={(item) => CarouselImages(item)}
        />
      </View>
      <ScrollView>
        <View style={[styles.itemContainer, { height: imageHeight }]}>
          <Text style={styles.text}>{product.name}</Text>
          <Text style={[{ fontSize: 20, fontWeight: "bold" }, styles.text]}>
            ${product.price}
          </Text>
          <Text style={styles.text} numberOfLines={6}>
            {product.description}
          </Text>
          <IncrementDecrementButtons
            quantity={product.quantity}
            incrementBtn={incrementBtnHandler}
            decrementBtn={decrementBtnHandler}
          />
          <View>
            <GeneralButton
              icon={"plus"}
              title="Add To Cart"
              onPress={addToCartHandler}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ProductDetailsPage;
const CarouselImages = ({ item }) => {
  return (
    <View key={item.id} style={styles.carousel}>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    borderTopRightRadius: 50,
    backgroundColor: light[500],
    borderTopLeftRadius: 50,
    paddingHorizontal: 40,
  },
  carousel: {
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  image: {
    width: deviceWidth,
    height: 300,
  },
  text: {
    color: light[100],
    marginVertical: 5,
    fontWeight: "400",
  },
  addCartContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: flame[900],
    justifyContent: "center",
    paddingVertical: 8,
    gap: 10,
    borderRadius: 10,
    marginVertical: 15,
  },
});
