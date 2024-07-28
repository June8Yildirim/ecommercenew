import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { flame, light } from "../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
import AdminProductItem from "./AdminProductItem";

const AdminProductCard = ({ index, item }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const idx = index;
  const navigation = useNavigation();
  const id = item.productId;
  const detailsHandler = () => {
    navigation.navigate("details", { id });
  };
  const onEditHandler = () => {
    navigation.navigate("updateproduct", { id });
    console.log("item editing");
  };
  const onDeleteItemHandler = () => {
    console.log("item deleting");
  };
  return (
    <>
      <AdminProductItem
        name={item.name}
        index={index.index}
        price={item.price}
        image={item.images[0]}
        category={item.category}
        stock={item.stock}
        detailsHandler={detailsHandler}
        setIsOpenModal={setIsOpenModal}
      />
      {isOpenModal && (
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onEditHandler} style={styles.modalStyle}>
            <Text
              style={[
                styles.modalText,
                {
                  backgroundColor: flame[900],
                },
              ]}
            >
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onDeleteItemHandler}
            style={styles.modalStyle}
          >
            <Text
              style={[
                styles.modalText,
                {
                  backgroundColor: flame[200],
                },
              ]}
            >
              Delete
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsOpenModal(false)}
            style={styles.modalStyle}
          >
            <Text
              style={[
                styles.modalText,
                {
                  backgroundColor: flame[900],
                },
              ]}
            >
              Close
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default AdminProductCard;

const styles = StyleSheet.create({
  modalStyle: {
    zIndex: 100,
  },
  modalView: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "center",
  },
  modalText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    alignContent: "center",
    alignSelf: "center",
    maxWidth: 100,
    color: light[100],
    borderRadius: 10,
  },
});
