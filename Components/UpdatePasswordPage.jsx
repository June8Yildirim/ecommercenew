import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import Footer from "./ui/Footer";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";

const UpdatePasswordPage = ({ route, navigation, password }) => {
  const [updatedPassword, setUpdatedPassword] = useState("");
  const [oldPassword, setOldPassword] = useState(password);
  const { navigate } = navigation;
  const [isFocused, setIsFocused] = useState(false);
  const dimesion = Dimensions.get("window");
  const { width, height } = dimesion;
  const availableHeight = height * 0.75;
  const availableWidht = width * 0.65;
  const changePasswordHandler = () => {
    console.log("Password is change");
  };
  return (
    <View style={{ ...defaultStyle, padding: 20 }}>
      <View style={{ marginVertical: 30 }}>
        <Text style={styles.headerText}>Change Password</Text>
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.Outercontainer,
          { height: availableHeight },
        ]}
      >
        <View style={[styles.container, { width: availableWidht }]}>
          <TextInput
            label={"Old Password"}
            value={oldPassword}
            secureTextEntry={true}
            style={[
              styles.input,
              { backgroundColor: isFocused ? "#FF0000" : light[700] },
            ]}
            onChangeText={(pass) => setOldPassword(pass)}
          />
          <TextInput
            label={"New Password"}
            value={updatedPassword}
            secureTextEntry={true}
            style={[
              styles.input,
              { backgroundColor: isFocused ? "#FF0000" : light[700] },
            ]}
            onChangeText={(pass) => setUpdatedPassword(pass)}
          />
          <TextInput
            label={"Verify Password"}
            value={updatedPassword}
            secureTextEntry={true}
            style={[
              styles.input,
              { backgroundColor: isFocused ? light[900] : light[700] },
            ]}
            onChangeText={(pass) => setUpdatedPassword(pass)}
          />
        </View>
        <GeneralButton
          containerStyle={styles.loginStyle}
          title={"Change Password"}
          icon={"lock"}
          onPress={changePasswordHandler}
        />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  Outercontainer: {
    backgroundColor: flame[900],
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
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
    width: 250,
    marginVertical: 20,
  },
  btnContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
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
export default UpdatePasswordPage;
