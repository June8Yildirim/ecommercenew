import { StyleSheet, Text, View } from "react-native";
import { flame, light } from "../../assets/Colors";
import React from "react";

const TextBox = ({ title, value, idx }) => {
  return (
    <View style={[styles.container]}>
      <Text
        style={[
          styles.title,
          {
            color: idx % 2 === 0 ? light[200] : flame[200],
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.value,
          {
            color: idx % 2 === 0 ? light[200] : flame[200],
          },
        ]}
      >
        {value}
      </Text>
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "800",
  },
  value: {
    fontWeight: "300",
    fontSize: 11,
  },
});
