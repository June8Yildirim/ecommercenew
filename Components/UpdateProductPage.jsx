import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { Text, TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import Header from "./ui/Header";
import { CategoryButton } from "./ui/Buttons/CategoryButton";
import UpdateProductImages from "./Images";

const UpdateProductPage = ({ route, navigation, product }) => {
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
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    price: product.price,
    productId: product.productId,
    stock: product.stock,
    category: product.category,
    description: product.description,
    quantity: product.quantity,
    categoryId: product.categoryId,
    images: product.images,
  });
  const [isFocused, setIsFocused] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const dimesion = Dimensions.get("window");
  const { width: deviceWidth, height: deviceHeight } = dimesion;
  const width = deviceWidth * 0.9;
  const height = deviceHeight * 0.8;
  const onPressHandler = (id, category) => {
    setUpdatedProduct({ ...updatedProduct, categoryId: id, category });
    setIsCategoriesVisible(false);
  };
  const updateHandler = () => {
    console.log("uploading");
  };
  return (
    <View style={{ ...defaultStyle }}>
      <Header back={true} />
      <View style={{ marginVertical: 20, paddingTop: 60 }}>
        <Text style={styles.headerText}>Update Product</Text>
      </View>
      <ScrollView contentContainerStyle={[styles.container]}>
        <FlatList
          data={product.images}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <UpdateProductImages image={item} />}
          horizontal
        />
        <TextInput
          label={"Name"}
          value={product["name"]}
          style={[styles.input]}
          onChangeText={(name) => setUpdatedProduct({ ...product, name: name })}
        />
        <TextInput
          label={"Description"}
          value={product["description"]}
          style={[styles.input]}
          onChangeText={(desc) =>
            setUpdatedProduct({ ...product, description: desc })
          }
        />
        <TextInput
          label={"Quantity"}
          value={product["quantity"].toString()}
          style={[styles.input]}
          onChangeText={(qty) =>
            setUpdatedProduct({ ...product, quantity: qty })
          }
        />
        <TextInput
          label={"Stock"}
          value={product["stock"].toString()}
          style={[styles.input]}
          onChangeText={(stock) => setUpdatedProduct({ ...product, stock })}
        />
        <TextInput
          label={"Price"}
          value={product["price"].toString()}
          style={[styles.input]}
          onChangeText={(price) => setUpdatedProduct({ ...product, price })}
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
            {updatedProduct["category"]}
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
      </ScrollView>
      <GeneralButton
        onPress={updateHandler}
        textStyle={""}
        containerStyle={styles.loginStyle}
        title={"Update Product"}
        icon={"creation"}
      />
    </View>
  );
};
export default UpdateProductPage;

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
    color: light[100],
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
  image: {
    width: 300,
    height: 280,
    resizeMode: "contain",
  },
});
