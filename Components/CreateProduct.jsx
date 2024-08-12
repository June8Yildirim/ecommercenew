import {
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { Avatar, Text, TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import Header from "./ui/Header";
import { CategoryButton } from "./ui/Buttons/CategoryButton";
import IconButton from "./ui/Buttons/IconButton";
import UpdateProductImages from "./Images";
import { print } from "../utils/print";
import HeaderTitle from "./ui/HeaderTitle";

export default function CreateProductPage({ route, navigation }) {
  const { navigate } = navigation;
  const categories = [
    {
      name: "Home Electronics",
      id: "el1",
    },
    {
      name: "Computer",
      id: "comp1",
    },
    {
      name: "Games",
      id: "gam1",
    },
    {
      name: "Movies",
      id: "mov1",
    },
    {
      name: "Books",
      id: "boo1",
    },
    {
      name: "Clothing",
      id: "cl1",
    },
  ];
  const [product, setProduct] = useState({
    name: "",
    price: "",
    productId: "",
    stock: "",
    category: "",
    description: "",
    quantity: "",
    categoryId: "",
    images: "",
  });
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const dimesion = Dimensions.get("window");
  const { width: deviceWidth, height: deviceHeight } = dimesion;

  const onPressHandler = (id, category) => {
    setProduct({ ...product, categoryId: id, category });
    setIsCategoriesVisible(!isCategoriesVisible);
  };

  print(product);
  const createHandler = () => {};
  return (
    <View style={{ ...defaultStyle }}>
      <Header hasCard={false} back={true} />
      <HeaderTitle header={"Create Product"} style={{ marginTop: 60 }} />
      <ScrollView contentContainerStyle={[styles.container]}>
        {product.images.length > 0 && (
          <FlatList
            data={product.images}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <UpdateProductImages image={item} />}
          />
        )}
        <IconButton
          icon={"camera"}
          title={"Upload Images"}
          backgroundColor={flame[500]}
          style={{
            borderRadius: 100,
            backgroundColor: flame[500],
            width: 100,
            height: 100,
          }}
          size={40}
          onPress={() => navigation.navigate("camera")}
        />
        <TextInput
          label={"Name"}
          value={product["name"]}
          style={[styles.input]}
          onChangeText={(name) => setProduct({ ...product, name: name })}
        />
        <TextInput
          label={"Quantity"}
          value={product["quantity"].toString()}
          style={[styles.input]}
          onChangeText={(qty) => setProduct({ ...product, quantity: qty })}
        />
        <TextInput
          label={"Stock"}
          value={product["stock"].toString()}
          style={[styles.input]}
          onChangeText={(stock) => setProduct({ ...product, stock })}
        />
        <TextInput
          label={"Price"}
          value={product["price"].toString()}
          style={[styles.input]}
          onChangeText={(price) => setProduct({ ...product, price })}
        />
        <TextInput
          label={"Description"}
          value={product["description"]}
          numberOfLines={3}
          style={[styles.input]}
          onChangeText={(desc) => setProduct({ ...product, description: desc })}
        />
        <TouchableOpacity
          onPress={() => setIsCategoriesVisible(!isCategoriesVisible)}
          style={{
            backgroundColor: flame[600],
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text variant="titleMedium" style={{ color: light[100] }}>
            Select Category
            {product["category"]}
          </Text>
        </TouchableOpacity>
        {isCategoriesVisible && (
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <CategoryButton
                title={item.name}
                category={item}
                index={index}
                id={item.id}
                onPress={onPressHandler}
              />
            )}
            horizontal
          />
        )}
        <GeneralButton
          onPress={createHandler}
          textStyle={""}
          containerStyle={styles.loginStyle}
          title={"Create Product"}
          icon={"creation"}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: light[800],
    paddingVertical: 20,
  },
  headerText: {
    backgroundColor: flame[900],
    height: 50,
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 5,
    verticalAlign: "middle",
    borderRadius: 7,
  },
  input: {
    marginVertical: 10,
    width: 300,
    height: 55,
  },
  btnContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginStyle: {
    width: 200,
    backgroundColor: flame[200],
  },
  btnStyle: {
    width: 200,
  },
});
