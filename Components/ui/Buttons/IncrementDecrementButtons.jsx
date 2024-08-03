import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "./IconButton";
import { flame, light } from "../../../assets/Colors";

const IncrementDecrementButtons = ({
  quantity,
  incrementBtn,
  decrementBtn,
  containerStyle,
}) => {
  return (
    <View style={styles.quantityOuterContainer}>
      <View style={[styles.quantityContainer, { ...containerStyle }]}>
        <IconButton
          icon={"minus"}
          size={28}
          backgroundColor={flame[500]}
          onPress={decrementBtn}
          color={light[100]}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <IconButton
          icon={"plus"}
          size={28}
          backgroundColor={flame[500]}
          color={light[100]}
          onPress={incrementBtn}
        />
      </View>
    </View>
  );
};

export default IncrementDecrementButtons;

const styles = StyleSheet.create({
  quantity: {
    color: light[800],
    fontWeight: "semibold",
    fontSize: 15,
    marginHorizontal: 10,
  },
  quantityOuterContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  quantityContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
