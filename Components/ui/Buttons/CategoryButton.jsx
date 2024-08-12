import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { flame, light } from "../../../assets/Colors";

export const CategoryButton = ({ index, onPress, title, id, category }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: index % 2 === 0 ? flame[400] : light[500] },
      ]}
      onPress={() => onPress(category)}
    >
      <Text style={[styles.font]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    elevation: 10,
  },
  font: {
    fontSize: 12,
    textAlign: "center",
    padding: 10,
    color: light[100],
  },
});
