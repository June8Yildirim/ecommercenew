import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { flame, light } from "../../assets/Colors";

const HeaderTitle = ({ style, header }) => {
  return (
    <View style={{ ...style, marginVertical: 30 }}>
      <Text style={styles.headerText}>{header}</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  headerText: {
    backgroundColor: flame[900],
    height: 50,
    color: light[100],
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 5,
    verticalAlign: "middle",
    borderRadius: 7,
  },
});
