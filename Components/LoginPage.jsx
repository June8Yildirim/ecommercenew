import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import Footer from "./ui/Footer";
import HeaderTitle from "./ui/HeaderTitle";
import axios from "axios";
import { baseURL } from "../axios/api";
import { useMutation } from "@tanstack/react-query";
import Toast, { ErrorToast, BaseToast } from "react-native-toast-message";

export default function LoginPage({ route, navigation }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const dimesion = Dimensions.get("window");
  const { width, height } = dimesion;
  const availableHeight = height * 0.75;
  const availableWidht = width * 0.65;

  const loginQuery = async () => {
    return await axios.post(`${baseURL}/auth`, user, { withCredentials: true });
  };

  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationFn: () => loginQuery(),
    mutationKey: [user],
  });

  const submitHandler = () => {
    mutate(user);
  };
  useEffect(() => {
    if (error) {
      console.log(JSON.stringify(error, null, 4));
      console.log(JSON.stringify(error.response.data.message, null, 4));
      Toast.show({ type: "error", text1: error.response.data.message });
    }
    if (isSuccess) {
      console.log(JSON.stringify(data, null, 4));
      navigation.navigate("profile");
      Toast.show({ type: "success", text1: data.data });
    }
  }, [isSuccess, error, data]);
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
          />
          <TextInput
            label={"Password"}
            value={user["password"]}
            secureTextEntry
            style={[styles.input]}
            onChangeText={(pass) => setUser({ ...user, password: pass })}
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
              textStyle={{ color: light[900], fontSize: 10 }}
              size={15}
              onPress={() => navigation.navigate("forgetpassword")}
            />
          </View>
        </View>
        <GeneralButton
          containerStyle={styles.loginStyle}
          title={"Login"}
          icon={"login"}
          onPress={submitHandler}
        />

        <View style={styles.btnContainer}>
          <Text style={{ color: light[800] }}>OR</Text>
          <GeneralButton
            containerStyle={styles.btnStyle}
            title={"SIGNUP"}
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
    backgroundColor: flame[900],
    alignItems: "center",
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
