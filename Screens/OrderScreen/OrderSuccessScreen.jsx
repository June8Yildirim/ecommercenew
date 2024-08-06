import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderSuccessScreen = () => {
  return (
    <View>
      <Image source={require("../../assets/images/OrderSuccessImage.jpeg")} />
      <RegularButton
        containerStyle={styles.btnContainer}
        textStyle={styles.btnText}
        title={btnText}
        onPress={orderHandler}
      />
    </View>
  );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({});
