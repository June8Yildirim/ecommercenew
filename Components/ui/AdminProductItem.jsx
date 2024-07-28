import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { flame, light } from "../../assets/Colors";

const AdminProductItem = ({
  setIsOpenModal,
  index,
  price,
  name,
  category,
  stock,
  image,
  detailsHandler,
}) => {
  //FIX: fix it gap between price and name value
  return (
    <TouchableOpacity
      onPress={detailsHandler}
      onLongPress={() => setIsOpenModal(true)}
    >
      <View
        style={[
          styles.productsContainer,
          {
            backgroundColor: index % 2 === 0 ? flame[200] : flame[900],
          },
        ]}
      >
        <View style={styles.itemContainer}>
          <Image source={{ uri: image.url }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={[styles.text]}>${price}</Text>
            <Text
              numberOfLines={1}
              style={[
                styles.text,
                {
                  maxWidth: 60,
                },
              ]}
            >
              {name}
            </Text>

            <Text
              style={[
                styles.text,
                {
                  maxWidth: 60,
                },
              ]}
              numberOfLines={1}
            >
              {category}
            </Text>
            <Text style={[styles.text]}>{stock}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AdminProductItem;

const styles = StyleSheet.create({
  productsContainer: {
    borderRadius: 8,
    borderColor: "fff",
    marginVertical: 5,
    zIndex: 0,
    height: 100,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 5,
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    width: 80,
    marginHorizontal: 10,
    color: light[100],
  },
  image: {
    width: 60,
    height: 100,
    resizeMode: "contain",
    borderRadius: 40,
  },
});
