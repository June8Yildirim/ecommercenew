import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Headline } from "react-native-paper";
import { flame, light } from "../../assets/Colors";

const ProductItem = ({ idx, price, name, image }) => {
  const addToCartHandler = () => {};
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text
          numberOfLines={2}
          style={[
            styles.text,
            { color: idx % 2 == 0 ? light[200] : flame[200] },
          ]}
        >
          {name}
        </Text>
        <Headline
          style={[
            styles.text,
            {
              fontWeight: 900,
              color: idx % 2 === 0 ? light[100] : flame[200],
            },
          ]}
        >
          ${price}
        </Headline>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image.url }} style={styles.image} />
      </View>
      <TouchableOpacity
        onPress={addToCartHandler}
        style={styles.buttonContainer}
      >
        <Text
          style={[
            styles.button,
            {
              backgroundColor: idx % 2 === 0 ? light[100] : flame[200],
            },
          ]}
        >
          Add To Cart
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
    position: "relative",
    left: 30,
  },
  textContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    fontWeight: "semibold",
    fontSize: 25,
    color: light[300],
  },
  buttonContainer: {
    position: "absolute",
    top: "97%",
    width: "100%",
  },
  button: {
    backgroundColor: light[100],
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    width: "100%",
    borderWidth: 1,
    borderColor: light[200],
    elevation: 5,
    textAlign: "center",
    paddingVertical: 9,
  },
  image: {
    width: 200,
    height: 280,
    resizeMode: "contain",
  },
});
