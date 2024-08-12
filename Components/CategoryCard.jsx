import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { light, flame } from "../assets/Colors";
import IconButton from "./ui/Buttons/IconButton";

const CategoryCard = ({ title, id, deleteHandler }) => {
  console.log(title);
  const reverse = false;
  return (
    <View style={styles.container}>
      <Text style={styles.cardText}>{title}</Text>
      <TouchableOpacity onPress={() => deleteHandler(id)}>
        <IconButton
          icon={"delete"}
          backgroundColor={flame[200]}
          onPress={() => deleteHandler(id)}
          size={40}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: light[100],
    elevation: 5,
    margin: 5,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
