import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import Footer from "./ui/Footer";
import Button from "./ui/Buttons/Button";
import Header from "./ui/Header";

const UpdateProfilePage = ({ route, navigation, user }) => {
  const { navigate } = navigation;
  const [updatedUser, setUpdatedUser] = useState({
    email: "",
    name: "",
    password: "",
    address: "",
    country: "",
    state: "",
    zipCode: "",
  });
  const [isFocused, setIsFocused] = useState(false);
  const dimesion = Dimensions.get("window");
  const { width: deviceWidth, height: deviceHeight } = dimesion;
  const width = deviceWidth * 0.9;
  const height = deviceHeight * 0.8;
  const updateHandler = () => {
    console.log("uploading");
  };
  return (
    <View style={{ ...defaultStyle }}>
      <Header back={true} />
      <View style={{ marginVertical: 20, paddingTop: 60 }}>
        <Text style={styles.headerText}>Update Profile</Text>
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { height: height, width: width },
        ]}
      >
        <TextInput
          label={"Name"}
          value={user["name"]}
          onFocus={() => setIsFocused(true)}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[900] : light[700] },
          ]}
          onChangeText={(name) => ({ ...user, name: name })}
        />
        <TextInput
          label={"Email"}
          value={user["email"]}
          onFocus={() => setIsFocused(true)}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(email) => setUpdatedUser({ ...user, email })}
        />
        <TextInput
          label={"Address"}
          value={user["address"]}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(data) => setUpdatedUser({ ...user, address: data })}
        />
        <TextInput
          label={"State"}
          value={user["state"]}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(st) => setUpdatedUser({ ...user, state: st })}
        />
        <TextInput
          label={"Zip Code"}
          value={user["zipCode"]}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(data) => setUpdatedUser({ ...user, zipCode: data })}
        />
        <TextInput
          label={"Country"}
          value={user["country"]}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(data) => setUpdatedUser({ ...user, country: data })}
        />
        <GeneralButton
          onPress={updateHandler}
          textStyle={""}
          containerStyle={styles.loginStyle}
          title={"Update User"}
          icon={"creation"}
        />
      </ScrollView>
    </View>
  );
};
export default UpdateProfilePage;

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
