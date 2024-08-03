import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import Footer from "./ui/Footer";
import HeaderTitle from "./ui/HeaderTitle";
import { useDispatch } from "react-redux";
import { resetPassword } from "../redux/store/actions/auth/password";
import { useAuth } from "../utils/hooks/useAuth";

export default function OneTimePasswordPage({ route, navigation }) {
  const { navigate } = navigation;
  const dispacth = useDispatch();
  const [password, setPassword] = useState("123ACV");
  const [oneTimePassword, setOneTimePassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dimesion = Dimensions.get("window");
  const { width, height } = dimesion;
  const availableHeight = height * 0.75;
  const isLoading = useAuth(navigation, dispacth, "login");
  const resetPasswordHandler = () => {
    dispacth(resetPassword({ oneTimePassword, password }));
  };

  return (
    <View style={{ ...defaultStyle, padding: 20 }}>
      <HeaderTitle header={"Reset Password"} />
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { height: availableHeight, width: width },
        ]}
      >
        <TextInput
          label={"Code"}
          style={[styles.input]}
          onChangeText={(pass) => setOneTimePassword(pass)}
        />
        <TextInput
          label={"New Password"}
          value={password}
          secureTextEntry
          style={[styles.input]}
          onChangeText={(pass) => setPassword(pass)}
        />
        <GeneralButton
          containerStyle={styles.loginStyle}
          title={"Reset Password"}
          icon={"link-box-outline"}
          onPress={resetPasswordHandler}
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
    backgroundColor: light[700],
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
