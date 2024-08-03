import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { flame, light } from "../../assets/Colors";

const ConfirmOrderItem = ({ quantity, idx, id, price, name, image }) => {
  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundColor: idx % 2 === 0 ? light[400] : flame[200],
        },
      ]}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: image?.url }} style={styles.image} />
      </View>
      <Text style={{ fontWeight: 900 }}>{quantity} x</Text>
      <View style={styles.textContainer}>
        <Text
          numberOfLines={2}
          style={[
            styles.text,
            { color: idx % 2 === 0 ? flame[200] : light[200] },
          ]}
        >
          {name}
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontWeight: 900,
              color: idx % 2 === 0 ? flame[200] : light[200],
            },
          ]}
        >
          ${price}
        </Text>
      </View>
    </View>
  );
};

export default ConfirmOrderItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
  },
  imageContainer: {
    height: 80,
  },
  textContainer: {
    justifyContent: "center",
  },
  text: {
    fontWeight: "100",
    fontFamily: "poppins-medium",
    fontSize: 13,
  },
  image: {
    width: 200,
    height: "100%",
    resizeMode: "contain",
  },
});
