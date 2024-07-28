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

const ProductCard = ({ index, item }) => {
  const idx = index.index;
  const navigation = useNavigation();
  const dimensions = Dimensions;
  const deviceWidth = dimensions.get("window").width;
  const deviceHeight = dimensions.get("window").height * 0.5;
  const width = (deviceWidth - (deviceWidth % 100)) * 0.6;
  const id = item.id;
  const detailsHandler = () => {
    navigation.navigate("details", { id });
  };
  return (
    <TouchableOpacity onPress={detailsHandler}>
      <View
        style={[
          styles.productsContainer,
          {
            backgroundColor: idx % 2 === 0 ? flame[200] : light[100],
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
    paddingVertical: 20,
    backgroundColor: flame[200],
    height: 200,
    alignItems: "center",
    justifyContent: "space-between",

    marginVertical: 10,
    marginHorizontal: 20,
  },
});
