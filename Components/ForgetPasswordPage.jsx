import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import Header from "./ui/Header";
import GeneralButton from "./ui/Buttons/GeneralButton";
import Footer from "./ui/Footer";

export default function ForgetPasswordPage({ route, navigation }) {
  const { navigate } = navigation;
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dimesion = Dimensions.get("window");
  const { width, height } = dimesion;
  return (
    <View style={{ ...defaultStyle, padding: 20 }}>
      <View style={{ marginVertical: 30 }}>
        <Text style={styles.headerText}>Forget Password</Text>
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { height: height, width: width },
        ]}
      >
        <TextInput
          label={"Email"}
          value={email}
          onFocus={() => setIsFocused(true)}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(email) => setEmail(email)}
        />
        <GeneralButton
          containerStyle={styles.loginStyle}
          title={"Send Request Link"}
          icon={"link"}
          onPress={() => navigate("onetimepassword")}
        />
        <View style={styles.btnContainer}>
          <GeneralButton
            containerStyle={styles.btnStyle}
            title={"Create User"}
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
    marginVertical: 20,
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
