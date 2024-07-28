import {
  FlatList,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { flame, light } from "../assets/Colors";
import Header from "./ui/Header";
import HeaderTitle from "./ui/HeaderTitle";
import CategoryCard from "./CategoryCard";
import RegularButton from "./ui/Buttons/RegularButton";

const categoryData = [
  {
    title: "Electronics",
  },
  {
    title: "Appliences",
  },
];
const CreateCategoryPage = () => {
  const [category, setCategory] = useState("");
  const onCreateCategoryHandler = () => {
    console.log(category);
  };
  return (
    <View style={{ ...defaultStyle, backgroundColor: light[600] }}>
      <Header back={true} />
      <HeaderTitle
        style={{ marginBottom: 20, paddingTop: 70 }}
        header={"Category"}
      />
      <ScrollView style={{ marginBottom: 20 }}>
        <View
          style={{ backgroundColor: light[100], padding: 20, minHeight: 400 }}
        >
          {categoryData.map(({ title }) => (
            <CategoryCard title={title} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.categoryContainer}>
        <TextInput
          placeholder="Category"
          value={category}
          style={styles.categoryText}
          placeholderTextColor={light[100]}
          onChangeText={setCategory}
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
    backgroundColor: flame[900],
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
