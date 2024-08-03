import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ProductItem from "./ProductItem";
import { flame, light } from "../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ProductCard = ({ index, item }) => {
  const idx = index.index;
  const navigation = useNavigation();
  const dimensions = Dimensions;
  const deviceWidth = dimensions.get("window").width;
  const deviceHeight = dimensions.get("window").height * 0.45;
  const width = (deviceWidth - (deviceWidth % 100)) * 0.8;
  const id = item._id;
  const detailsHandler = () => {
    navigation.navigate("details", { id });
  };

  const { cartItems } = useSelector((state) => state.cart);
  return (
    <TouchableOpacity onPress={detailsHandler}>
      <View
        style={[
          styles.productsContainer,
          {
            backgroundColor: idx % 2 === 0 ? flame[400] : light[700],
            width: width,
            height: deviceHeight,
          },
        ]}
      >
        <ProductItem
          name={item.name}
          idx={idx}
          price={item.price}
          image={item.images[0]}
          stock={item.stock}
          id={item._id}
          quantity={item.quantity}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productsContainer: {
    borderRadius: 8,
    borderColor: "fff",
    elevation: 5,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
