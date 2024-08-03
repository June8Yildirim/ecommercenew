import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Headline } from "react-native-paper";
import { flame, light } from "../../assets/Colors";
import IncrementDecrementButtons from "./Buttons/IncrementDecrementButtons";
import { updateProduct } from "../../redux/store/actions/product/patch";
import { useDispatch } from "react-redux";

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
  const [updatedQty, setUpdatedQty] = useState(quantity);
  const [updatedPrice, setUpdatedPrice] = useState(quantity * price);
  const item = { quantity, id, stock, image, name, price };
  const dispatch = useDispatch();

  const decrementHandler = () => {
    if (updatedQty === 0) {
      // setTimeout(() => {
      //   navigation.navigate("home");
      // }, 1000);
      return dispatch({ type: "removeFromCart", payload: id });
    }
    setUpdatedQty(updatedQty - 1);
    setUpdatedPrice(updatedPrice - price);
    decrementBtn({ ...item, price, quantity: updatedQty });
  };

  //FIX: fixed later to update displayed price;

  const incrementHandler = () => {
    setUpdatedQty(updatedQty + 1);
    setUpdatedPrice(updatedPrice + price);
    incrementBtn({ ...item, price, quantity: updatedQty });
  };

  return (
    <View style={styles.itemContainer}>
      <View
        style={[
          styles.imageContainer,
          {
            backgroundColor: idx % 2 === 0 ? flame[700] : light[700],
          },
        ]}
      >
        <Image source={{ uri: image?.url }} style={styles.image} />
        <Text
          style={[
            styles.text,
            { color: idx % 2 == 0 ? flame[700] : flame[200] },
          ]}
        ></Text>
      </View>
      <View style={styles.textContainer}>
        <Headline
          style={[
            styles.text,
            {
              fontFamily: "poppins-semibold",
              color: idx % 2 === 0 ? flame[700] : flame[200],
            },
          ]}
        >
          ${updatedPrice}
        </Headline>
      </View>
      <View>
        <IncrementDecrementButtons
          quantity={updatedQty}
          incrementBtn={incrementHandler}
          decrementBtn={decrementHandler}
          containerStyle={styles.containerStyle}
        />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
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
  containerStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    width: 60,
  },
});
