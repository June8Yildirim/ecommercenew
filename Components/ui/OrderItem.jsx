import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import TextBox from "./TextBox";
import { flame, light } from "../../assets/Colors";
import moment from "moment";
import { print } from "../../utils/print";
import { useRoute } from "@react-navigation/native";
import PreviousOrders from "./PreviousOrders";

const OrderItem = ({
  orders,
  idx,
  address,
  orderAt,
  paymentStatus,
  orderStatus,
  id,
  delivery,
  price,
  owner,
  items,
}) => {
  //TODO: make it functional to display previous orders details
  const formattedDate = moment(orderAt).format("YYYY-MMM-DD kk:mm");
  const [isOrderDetailed, setIsOrderDetailed] = useState(false);
  const detailHandler = () => {
    setIsOrderDetailed(true);
    // return <PreviousOrders orderItems={items} />;
  };
  return (
    <View style={{ marginVertical: 10 }}>
      <TouchableOpacity onPress={detailHandler}>
        <Text
          style={[
            styles.id,
            {
              backgroundColor: idx % 2 !== 0 ? light[900] : flame[300],
              color: light[100],
            },
          ]}
        >
          ID:{id}
        </Text>
        <View
          style={[
            styles.container,
            {
              backgroundColor: idx % 2 === 0 ? light[900] : light[200],
              borderColor: idx % 2 !== 0 ? light[200] : light[900],
            },
          ]}
        >
          <TextBox idx={idx} title={"Address"} value={address} />
          <TextBox idx={idx} title={"Ordered On"} value={formattedDate} />
          <TextBox idx={idx} title={"Price"} value={price} />
          <TextBox idx={idx} title={"Payment Status"} value={paymentStatus} />
          <TextBox idx={idx} title={"Order Status"} value={orderStatus} />
          <TextBox idx={idx} title={"Deliveried by"} value={delivery} />
          {owner && <TextBox idx={idx} title={"Ordered by"} value={owner} />}
        </View>
      </TouchableOpacity>
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
    fontSize: 12,
    fontFamily: "poppins-semibold",
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingVertical: 10,
    color: light[100],
  },
});
