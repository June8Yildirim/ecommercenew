import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import Footer from "./ui/Footer";

export default function OneTimePasswordPage({ route, navigation }) {
  const { navigate } = navigation;
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dimesion = Dimensions.get("window");
  const { width, height } = dimesion;
  const availableHeight = height * 0.75;

  return (
    <View style={{ ...defaultStyle, padding: 20 }}>
      <View style={{ marginVertical: 30 }}>
        <Text style={styles.headerText}>Reset Password</Text>
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { height: availableHeight, width: width },
        ]}
      >
        <TextInput
          label={"Code"}
          value={password}
          onFocus={() => setIsFocused(true)}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(pass) => setPassword(pass)}
        />
        <TextInput
          label={"New Password"}
          value={password}
          secureTextEntry
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[900] : light[700] },
          ]}
          onChangeText={(pass) => setPassword(pass)}
        />
        <GeneralButton
          containerStyle={styles.loginStyle}
          title={"Reset Password"}
          icon={"link-box-outline"}
        />
        <View style={styles.btnContainer}>
          <GeneralButton
            containerStyle={styles.btnStyle}
            title={"Signup"}
            icon={"creation"}
            onPress={() => navigate("signup")}
          />
          <GeneralButton
            containerStyle={styles.btnStyle}
            title={"Login"}
            icon={"login"}
            onPress={() => navigate("login")}
          />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: flame[900],
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
    marginTop: 20,
    width: 300,
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
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
