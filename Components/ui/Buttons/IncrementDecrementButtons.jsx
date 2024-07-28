import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "./IconButton";
import { flame, light, liver } from "../../../assets/Colors";

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
          size={22}
          backgroundColor={flame[500]}
          onPress={decrementBtn}
          color={light[100]}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <IconButton
          icon={"plus"}
          size={22}
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
    color: liver[800],
    fontWeight: "semibold",
  },
  quantityOuterContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
});
