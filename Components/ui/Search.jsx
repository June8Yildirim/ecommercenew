import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const Search = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search Item" onChangeText={onChangeText} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
