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
  const width = deviceWidth * 0.9;
  const height = deviceHeight * 0.8;
  const onPressHandler = (id, category) => {
    setProduct({ ...updatedProduct, categoryId: id, category });
    setIsCategoriesVisible(false);
  };
  const createHandler = () => {};
  return (
    <View style={{ ...defaultStyle }}>
      <Header back={true} />
      <View style={{ marginVertical: 20, paddingTop: 60 }}>
        <Text style={styles.headerText}>Create Product</Text>
      </View>
      <ScrollView contentContainerStyle={[styles.container, height]}>
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
          label={"Description"}
          value={product["description"]}
          style={[styles.input]}
          onChangeText={(desc) => setProduct({ ...product, description: desc })}
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
        <TouchableOpacity
          onPress={() => setIsCategoriesVisible(!isCategoriesVisible)}
          style={{
            backgroundColor: light[600],
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text variant="titleMedium" style={{ color: flame[900] }}>
            Select Category
            {product["category"]}
          </Text>
        </TouchableOpacity>
        {isCategoriesVisible && (
          <View>
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
          </View>
        )}
        <GeneralButton
          onPress={createHandler}
          textStyle={""}
          containerStyle={styles.loginStyle}
          title={"Update Product"}
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
    backgroundColor: flame[900],
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
