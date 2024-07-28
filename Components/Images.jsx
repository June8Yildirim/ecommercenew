import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { flame } from "../assets/Colors";
import IconButton from "./ui/Buttons/IconButton";

const UpdateProductImages = ({ image }) => {
  console.log(image);
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: image.url }} style={styles.image} />
      <IconButton icon={"delete"} backgroundColor={flame[500]} size={40} />
    </View>
  );
};

export default UpdateProductImages;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 280,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
