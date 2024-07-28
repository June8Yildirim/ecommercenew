import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextBox from "./TextBox";
import { flame, light } from "../../assets/Colors";
import RegularButton from "./Buttons/RegularButton";

const OrderItem = ({ admin = false, updateHandler, order, idx }) => {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text
        style={[
          styles.id,
          {
            backgroundColor: idx % 2 !== 0 ? flame[900] : flame[200],
          },
        ]}
      >
        ID:{order.id}
      </Text>
      <View
        style={[
          styles.container,
          {
            backgroundColor: idx % 2 === 0 ? flame[900] : "#fff",
            borderColor: idx % 2 !== 0 ? flame[900] : flame[200],
          },
        ]}
      >
        <TextBox idx={idx} title={"Address"} value={order.address} />
        <TextBox idx={idx} title={"Ordered On"} value={order.orderAt} />
        <TextBox idx={idx} title={"Price"} value={order.price} />
        <TextBox idx={idx} title={"Status"} value={order.status} />
        <TextBox idx={idx} title={"Payment Method"} value={order.paymentInfo} />
        {admin && (
          <RegularButton
            containerStyle={styles.btnContainer}
            textStyle={styles.btnText}
            title={"Update"}
            onPress={updateHandler}
          />
        )}
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 2,
    elevation: 10,
  },
  id: {
    fontSize: 15,
    fontWeight: "800",
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingVertical: 10,
    color: light[100],
  },
  btnContainer: {
    backgroundColor: flame[200],
    width: "100%",
    marginVertical: 20,
  },
  btnText: {
    color: light[100],
  },
});
