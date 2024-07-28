import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { light } from "../assets/Colors";
import Header from "./ui/Header";
import HeaderTitle from "./ui/HeaderTitle";
import { TextInput } from "react-native-paper";

const CategoriesPage = () => {
  const [category, setCategory] = useState("");
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
        ></View>
      </ScrollView>
    </View>
  );
};

export default CategoriesPage;

const styles = StyleSheet.create({});
