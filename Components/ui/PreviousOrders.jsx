import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { print } from "../../utils/print";

const PreviousOrders = ({ orderItems }) => {
  console.log("====================");
  const emptyOrders = () => {
    return <Text>No Orders Found</Text>;
  };
  // print(orderItems);
  console.log(orderItems[0].productId.name);
  return (
    <FlatList
      data={orderItems}
      keyExtractor={(item, index) => index}
      ListEmptyComponent={emptyOrders}
      renderItem={(item) => {
        <View>
          <Text>{item.productId?.name}</Text>
        </View>;
      }}
    />
  );
};

export default PreviousOrders;

const styles = StyleSheet.create({});
