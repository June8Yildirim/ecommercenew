import {
  FlatList,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { flame, light } from "../assets/Colors";
import Header from "./ui/Header";
import HeaderTitle from "./ui/HeaderTitle";
import CategoryCard from "./CategoryCard";
import RegularButton from "./ui/Buttons/RegularButton";
import {
  useSetCategories,
  useUpdateCategories,
} from "../utils/hooks/useProduct";
import { useIsFocused } from "@react-navigation/native";
import { print } from "../utils/print";
import { createCategory } from "../redux/store/actions/product/post";
import Toast from "react-native-toast-message";

const categoryData = [
  {
    title: "Electronics",
  },
  {
    title: "Appliences",
  },
];
const CreateCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const isFocused = useIsFocused();
  const [isCategory, setIsCategory] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useSetCategories(setCategories, isFocused, setIsLoading);
  const [newCategory, setNewCategory] = useState("");
  const onCreateCategoryHandler = () => {
    setIsCategory(true);
  };
  useEffect(() => {
    const categoryCreation = async () => {
      if (isCategory) {
        const { category, message } = await createCategory(newCategory);
        setIsCategory(false);
        setCategories([...categories, category]);
        setNewCategory("");
        Toast.show({ type: "success", text1: message });
      }
    };
    categoryCreation();
  }, [isCategory, isFocused]);

  const deleteHandler = (id) => {
    console.log(id);
  };
  print(categories);
  const emptyOrders = () => {
    return <Text>No Orders Found</Text>;
  };
  return (
    <View style={{ ...defaultStyle, backgroundColor: light[600] }}>
      <Header back={true} hasCard={false} />
      <HeaderTitle
        style={{ marginBottom: 10, marginTop: 70 }}
        header={"Category"}
      />
      <ScrollView style={{ marginBottom: 20 }}>
        <View
          style={{ backgroundColor: light[100], padding: 20, minHeight: 400 }}
        >
          {categories.map(({ category, _id }) => (
            <CategoryCard
              title={category}
              key={_id}
              id={_id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.categoryContainer}>
        <TextInput
          placeholder="Category"
          value={newCategory}
          style={styles.categoryText}
          placeholderTextColor={light[100]}
          onChangeText={setNewCategory}
        />
        <RegularButton
          textStyle={styles.btnText}
          containerStyle={styles.btnContainer}
          title={"Add"}
          onPress={onCreateCategoryHandler}
        />
      </View>
    </View>
  );
};

export default CreateCategoryPage;

const styles = StyleSheet.create({
  categoryContainer: {
    elevation: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: light[700],
  },
  categoryText: {
    backgroundColor: light[100],
    padding: 10,
    fontWeight: "600",
  },
  btnContainer: {
    backgroundColor: flame[500],
    width: "100%",
    marginVertical: 20,
  },
  btnText: {
    color: light[100],
  },
});
