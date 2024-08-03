import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import HeaderTitle from "./ui/HeaderTitle";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/store/actions/auth/profile";

const UpdateProfilePage = ({ route, navigation, user }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(user["name"]);
  const [email, setEmail] = useState(user["email"]);
  const [password, setPassword] = useState(user["password"]);
  const [address, setAddress] = useState(user["address"]);
  const [country, setCountry] = useState(user["country"]);
  const [zipCode, setZipCode] = useState(user["zipCode"]);
  const [state, setState] = useState(user["state"]);
  const [isFocused, setIsFocused] = useState();
  const dimesion = Dimensions.get("window");
  const { width: deviceWidth, height: deviceHeight } = dimesion;
  const width = deviceWidth * 0.9;
  const height = deviceHeight * 0.8;
  const updateHandler = () => {
    console.log("1");
    const updatedUser = { name, email, address, country, zipCode, state };
    console.log(updatedUser);
    dispatch(updateProfile(updatedUser));
  };
  return (
    <View style={{ ...defaultStyle }}>
      <Header back={true} />
      <HeaderTitle header={"Update Profile"} style={{ marginTop: 70 }} />
      <ScrollView
        contentContainerStyle={[styles.container, { height: height }]}
      >
        <TextInput
          label={"Name"}
          defaultValue={user["name"]}
          onFocus={() => setIsFocused(true)}
          style={styles.input}
          onChangeText={setName}
        />
        <TextInput
          label={"Email"}
          value={user["email"]}
          onFocus={() => setIsFocused(true)}
          style={[styles.input]}
          onChangeText={setEmail}
        />
        <TextInput
          label={"Address"}
          value={user["address"]}
          style={[styles.input]}
          onChangeText={setAddress}
        />
        <TextInput
          label={"State"}
          value={user["state"]}
          style={[styles.input]}
          onChangeText={setState}
        />
        <TextInput
          label={"Zip Code"}
          defaultValue={user["zipCode"]}
          style={[styles.input]}
          onChangeText={setZipCode}
        />
        <TextInput
          label={"Country"}
          value={user["country"]}
          style={[styles.input]}
          onChangeText={setCountry}
        />
        <GeneralButton
          onPress={updateHandler}
          textStyle={""}
          containerStyle={styles.loginStyle}
          title={"Update User"}
          icon={"creation"}
        />
      </ScrollView>
      <Footer />
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
    backgroundColor: light[700],
    paddingVertical: 20,
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
