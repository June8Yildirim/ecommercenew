import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Headline } from "react-native-paper";
import { flame, light } from "../../assets/Colors";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

const ProductItem = ({ idx, price, id, name, stock, quantity, image }) => {
  const dimensions = Dimensions;
  const dispatch = useDispatch();
  const item = { price, id, name, stock, image, quantity: 1 };

  const addToCartHandler = () => {
    if (stock === 0) {
      Toast.show({ type: "error", text1: "Out of Stock" });
    } else {
      dispatch({
        type: "addToCart",
        payload: { ...item },
      });
      Toast.show({ type: "success", text1: `Added To Cart`, text2: `${name}` });
    }
  };

  const cartMessage = stock > 0 ? "Add To Cart" : "Out of Stock";
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={[styles.text]}>
          {name}
        </Text>
        <Headline
          style={[
            styles.text,
            {
              color: idx % 2 === 0 ? light[100] : flame[200],
            },
          ]}
        >
          ${price}
        </Headline>
      </View>
      <View style={styles.imageContainer}>
        {image && <Image source={{ uri: image.url }} style={styles.image} />}
      </View>
      {/* TODO: Use General button component */}
      <TouchableOpacity
        onPress={addToCartHandler}
        style={styles.buttonContainer}
      >
        <Text
          style={[
            styles.button,
            {
              backgroundColor: idx % 2 === 0 ? light[700] : flame[400],
            },
          ]}
        >
          {cartMessage}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
  },
  imageContainer: {
    left: 30,
  },
  textContainer: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    width: "90%",
  },
  text: {
    fontSize: 25,
    fontWeight: 900,
    alignSelf: "flex-end",
    color: light[300],
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    top: 350,
  },
  button: {
    borderRadius: 8,
    borderColor: "fff",
    color: light[200],
    elevation: 5,
    textAlign: "center",
    paddingVertical: 9,
  },
  image: {
    width: "70%", //200,
    height: 200, //TODO: use platform with 280
    resizeMode: "stretch",
  },
});
