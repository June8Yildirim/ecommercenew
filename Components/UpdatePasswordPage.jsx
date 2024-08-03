import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import Footer from "./ui/Footer";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import { useDispatch } from "react-redux";
import { changePassword } from "../redux/store/actions/auth/password";
import { useAuth } from "../utils/hooks/useAuth";
import HeaderTitle from "./ui/HeaderTitle";

const UpdatePasswordPage = ({ route, navigation }) => {
  const [updatedPassword, setUpdatedPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const dispatch = useDispatch();
  const dimesion = Dimensions.get("window");
  const { width, height } = dimesion;
  const availableHeight = height * 0.75;
  const availableWidht = width * 0.65;
  const isLoading = useAuth(navigation, dispatch, "profile");

  //TODO: add validation
  const changePasswordHandler = () => {
    dispatch(changePassword({ oldPassword, newPassword: updatedPassword }));
  };
  return (
    <View style={{ ...defaultStyle, padding: 20 }}>
      <HeaderTitle header={"Change Password"} />
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
            style={[styles.input]}
            onChangeText={(pass) => setOldPassword(pass)}
          />
          <TextInput
            label={"New Password"}
            value={updatedPassword}
            secureTextEntry={true}
            style={[styles.input]}
            onChangeText={(pass) => setUpdatedPassword(pass)}
          />
          <TextInput
            label={"Verify Password"}
            value={updatedPassword}
            secureTextEntry={true}
            style={[styles.input]}
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
    backgroundColor: light[700],
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
    backgroundColor: flame[500],
  },
  btnStyle: {
    width: 200,
  },
});
export default UpdatePasswordPage;
