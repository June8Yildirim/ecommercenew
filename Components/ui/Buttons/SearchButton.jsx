import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { light } from "../../../assets/Colors";
import { Avatar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

const SearchButton = ({ setIsSearching }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const seachPressHandler = () => {
    setIsSearching((prev) => !prev);
  };
  return (
    <TouchableOpacity onPress={seachPressHandler}>
      <Avatar.Icon
        icon={"magnify"}
        color={light[500]}
        size={50}
        style={{ backgroundColor: light[100], elevation: 12 }}
      />
    </TouchableOpacity>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 20,
    top: 40,
    zIndex: 10,
  },
});
