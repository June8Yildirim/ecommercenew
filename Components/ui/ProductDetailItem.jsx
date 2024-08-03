import {
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import GeneralButton from "./Buttons/GeneralButton";
import IncrementDecrementButtons from "./Buttons/IncrementDecrementButtons";
import { light, flame } from "../../assets/Colors";
import { useDispatch, useSelector } from "react-redux";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const ProductDetailItem = ({
  name,
  description,
  price,
  quantity,
  addToCart,
  incrementBtn,
  decrementBtn,
}) => {
  const imageHeight = deviceHeight * 0.5;

  // TODO: add reviews and comment create section
  return (
    <ScrollView>
      <View style={[styles.itemContainer, { height: imageHeight }]}>
        <Text style={styles.text}>{name}</Text>
        <Text style={[{ fontSize: 20, fontWeight: "bold" }, styles.text]}>
          ${price}
        </Text>
        <Text style={styles.text} numberOfLines={6}>
          {description}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
