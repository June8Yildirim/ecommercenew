import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import Footer from "./ui/Footer";
import HeaderTitle from "./ui/HeaderTitle";
import { useDispatch } from "react-redux";
import { login } from "../redux/store/actions/auth/login";
import { Loader } from "./ui/Loader";
import { useAuth } from "../utils/hooks/useAuth";

export default function LoginPage({ route, navigation }) {
  const [user, setUser] = useState({
    email: "admin@admin.com",
    password: "123ACV",
  });
  const dimesion = Dimensions.get("window");
  const { width, height } = dimesion;
  const availableHeight = height * 0.75;
  const availableWidht = width * 0.65;

  const dispatch = useDispatch();
  const isLoading = useAuth(navigation, dispatch, "home");

  const submitHandler = () => {
    dispatch(login(user));
  };
  return (
    <View style={{ ...defaultStyle, padding: 20 }}>
      <HeaderTitle header={"Login"} />
      <ScrollView
        contentContainerStyle={[
          styles.Outercontainer,
          { height: availableHeight },
        ]}
      >
        <View style={[styles.container, { width: availableWidht }]}>
          <TextInput
            label={"Email"}
            value={user["email"]}
            style={[styles.input]}
            onChangeText={(email) => setUser({ ...user, email })}
            autoCapitalize="none"
          />
          <TextInput
            label={"Password"}
            value={user["password"]}
            secureTextEntry
            style={[styles.input]}
            onChangeText={(pass) => setUser({ ...user, password: pass })}
            autoCapitalize="none"
          />
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-end",
            }}
          >
            <GeneralButton
              containerStyle={styles.btnStyle}
              title={"Forget Password"}
              icon={"lock"}
              textStyle={{ fontSize: 10 }}
              size={15}
              onPress={() => navigation.navigate("forgetpassword")}
            />
          </View>
        </View>
        <GeneralButton
          containerStyle={styles.loginStyle}
          title={"SING IN"}
          icon={"login"}
          isLoading={isLoading}
          onPress={submitHandler}
        />

        <View style={styles.btnContainer}>
          <Text style={{ color: light[100] }}>OR</Text>
          <GeneralButton
            containerStyle={styles.btnStyle}
            title={"SIGN UP"}
            icon={"creation"}
            onPress={() => navigation.navigate("signup")}
          />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  Outercontainer: {
    backgroundColor: light[700],
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  container: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    marginTop: 20,
    width: 250,
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
