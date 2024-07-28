import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Headline } from "react-native-paper";
import { chestnut, flame, light } from "../../assets/Colors";
import IncrementDecrementButtons from "./Buttons/IncrementDecrementButtons";

const CartItem = ({
  quantity,
  incrementBtn,
  decrementBtn,
  idx,
  id,
  stock,
  price,
  name,
  image,
}) => {
  const containerStyle = {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    width: 60,
  };
  return (
    <View style={styles.itemContainer}>
      <View
        style={[
          styles.imageContainer,
          {
            backgroundColor: idx % 2 === 0 ? chestnut[700] : flame[200],
          },
        ]}
      >
        <Image source={{ uri: image.url }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            { color: idx % 2 == 0 ? chestnut[700] : flame[200] },
          ]}
        >
          {name}
        </Text>
        <Headline
          style={[
            styles.text,
            {
              fontWeight: 900,
              color: idx % 2 === 0 ? chestnut[700] : flame[200],
            },
          ]}
        >
          ${price}
        </Headline>
      </View>
      <View>
        <IncrementDecrementButtons
          quantity={quantity}
          incrementBtn={() => incrementBtn(id, quantity, stock)}
          decrementBtn={() => decrementBtn(id, quantity, stock)}
          containerStyle={containerStyle}
        />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
    paddingRight: 10,
  },
  imageContainer: {
    borderWidth: 1,
    width: "50%",
    borderTopRightRadius: 100,
    height: 100,
    borderBottomRightRadius: 100,
    marginBottom: 12,
  },
  textContainer: {
    justifyContent: "center",
  },
  text: {
    fontWeight: "semibold",
    fontSize: 18,
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
    height: "100%",
    resizeMode: "contain",
  },
});
