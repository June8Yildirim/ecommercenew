import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Headline } from "react-native-paper";

const SearchItem = ({ price, name, image, handler }) => {
  return (
    <TouchableOpacity onPress={handler} style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.text}>
          {name}
        </Text>
        <Headline style={{ fontWeight: 900 }}>${price}</Headline>
      </View>
      <Image source={{ uri: image.url }} style={styles.image} />
    </TouchableOpacity>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 8,
    borderColor: "fff",
    elevation: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 10,
    padding: 20,
    alignItems: "center",
    width: "100%",
  },
  textContainer: {
    width: "80%",
    paddingHorizontal: 30,
  },
  text: {
    fontWeight: "semibold",
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});
