import {
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { TextInput } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import GeneralButton from "./ui/Buttons/GeneralButton";
import Footer from "./ui/Footer";
import male from "../assets/images/maleAvatar.png";
import female from "../assets/images/femaleAvatar.png";
import Button from "./ui/Buttons/Button";

export default function SignUpPage({ route, navigation }) {
  const [user, setUser] = useState({
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
  const { width, height } = dimesion;
  const uploadAvatarHandler = () => {
    console.log("Avatar uploading");
  };

  return (
    <View style={{ ...defaultStyle, padding: 20 }}>
      <View style={{ marginVertical: 30 }}>
        <Text style={styles.headerText}>Create User</Text>
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { height: height, width: width },
        ]}
      >
        <View
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 20,
            width: "100%",
          }}
        >
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
            size={80}
            source={require("../assets/images/maleAvatar.png")}
          />
          <Button
            title="Upload Avatar"
            containerStyle={{ width: "40%" }}
            onPress={uploadAvatarHandler}
          />
        </View>
        <TextInput
          label={"Name"}
          value={user["name"]}
          onFocus={() => setIsFocused(true)}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[900] : light[700] },
          ]}
          onChangeText={(name) => setUser({ ...user, name: name })}
        />
        <TextInput
          label={"Email"}
          value={user["email"]}
          onFocus={() => setIsFocused(true)}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(email) => setUser({ ...user, email })}
        />
        <TextInput
          label={"Password"}
          value={user["password"]}
          secureTextEntry
          onFocus={() => setIsFocused(true)}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(pass) => setUser({ ...user, password: pass })}
        />
        <TextInput
          label={"Address"}
          value={user["address"]}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(data) => setUser({ ...user, address: data })}
        />
        <TextInput
          label={"State"}
          value={user["state"]}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(st) => setUser({ ...user, state: st })}
        />
        <TextInput
          label={"Zip Code"}
          value={user["zipCode"]}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(data) => setUser({ ...user, zipCode: data })}
        />
        <TextInput
          label={"Country"}
          value={user["country"]}
          style={[
            styles.input,
            { backgroundColor: isFocused ? light[200] : light[700] },
          ]}
          onChangeText={(data) => setUser({ ...user, country: data })}
        />
        <GeneralButton
          containerStyle={styles.loginStyle}
          title={"Create User"}
          icon={"creation"}
        />
        <View style={styles.btnContainer}>
          <Text style={{ color: light[800] }}>OR</Text>
          <GeneralButton
            containerStyle={styles.btnStyle}
            title={"Login"}
            icon={"login"}
            onPress={() => navigation.navigate("login")}
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
    justifyContent: "flex-start",
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
    marginVertical: 10,
    width: 300,
    height: 40,
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
