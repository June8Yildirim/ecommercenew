import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import Header from "./ui/Header";
import GeneralButton from "./ui/Buttons/GeneralButton";
import Footer from "./ui/Footer";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../redux/store/actions/auth/password";
import { useAuth } from "../utils/hooks/useAuth";
import HeaderTitle from "./ui/HeaderTitle";

export default function ForgetPasswordPage({ route, navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("admin@admin.com");
  const [isFocused, setIsFocused] = useState(false);
  const dimesion = Dimensions.get("window");
  const { width, height } = dimesion;
  const isLoading = useAuth(navigation, dispatch, "onetimepassword");
  const forgetPasswordHandler = () => {
    dispatch(forgetPassword({ email }));
    navigation.navigate("onetimepassword");
  };
  return (
    <View style={{ ...defaultStyle, padding: 20 }}>
      <HeaderTitle header={"Forget Password"} />
      <ScrollView contentContainerStyle={[styles.container]}>
        <TextInput
          label={"Email"}
          value={email}
          autoFocus={() => setIsFocused(true)}
          autoCapitalize="none"
          style={[styles.input]}
          onChangeText={(email) => setEmail(email)}
        />
        <GeneralButton
          containerStyle={styles.loginStyle}
          title={"Send Request Link"}
          icon={"link"}
          isLoading={isLoading}
          onPress={forgetPasswordHandler}
        />
        <View style={styles.btnContainer}>
          <GeneralButton
            containerStyle={styles.btnStyle}
            title={"Create User"}
            icon={"creation"}
            onPress={() => navigation.navigate("signup")}
          />
          <Text style={{ color: light[100] }}>OR</Text>
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
    backgroundColor: light[700],
    marginVertical: 30,
    paddingVertical: 30,
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
    marginVertical: 20,
    width: 300,
  },
  btnContainer: {
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
