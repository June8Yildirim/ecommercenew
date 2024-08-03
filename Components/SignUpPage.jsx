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
import Button from "./ui/Buttons/Button";
import { useDispatch } from "react-redux";
import { useAuth } from "../utils/hooks/useAuth";
import { register } from "../redux/store/actions/auth/profile";
import * as imageGalery from "expo-image-picker";
import ImagePicker from "./ImagePicker";
import HeaderTitle from "./ui/HeaderTitle";

export default function SignUpPage({ route, navigation }) {
  const dispatch = useDispatch();
  const formData = new FormData();
  const [avatar, setAvatar] = useState();
  const [user, setUser] = useState({
    name: "Test",
    email: "test@test.com",
    password: "123ACV",
    address: "113 stillview",
    country: "Canada",
    state: "QC",
    phone: "12313144",
    zipCode: "323asc",
    avatar: "",
  });
  const [isPhotoTaken, setIsPhotoToken] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dimesion = Dimensions.get("window");
  const { width, height } = dimesion;

  const isLoading = useAuth(navigation, dispatch, "home");

  const uploadAvatarHandler = async () => {
    setIsPhotoToken(!isPhotoTaken);
  };

  const registerHandler = () => {
    formData.append("name", user["name"]);
    formData.append("email", user["email"]);
    formData.append("password", user["password"]);
    formData.append("address", user["address"]);
    formData.append("state", user["state"]);
    formData.append("zipCode", user["zipCode"]);
    formData.append("country", user["country"]);
    formData.append("phone", user["phone"]);
    dispatch(register(user));
  };

  return (
    <>
      {isPhotoTaken && (
        <ImagePicker setAvatar={setAvatar} setIsTakePhoto={setIsPhotoToken} />
      )}
      <View style={{ ...defaultStyle, padding: 20 }}>
        <HeaderTitle header={"Create User"} />
        <ScrollView contentContainerStyle={[styles.container]}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 20,
              width: "100%",
            }}
          >
            {avatar ? (
              <Image
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                }}
                size={80}
                source={{ uri: avatar.uri }}
              />
            ) : (
              <Image
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                }}
                size={80}
                source={require("../assets/images/defaultAvatar.png")}
              />
            )}
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
            style={[styles.input]}
            onChangeText={(name) => setUser({ ...user, name: name })}
          />
          <TextInput
            label={"Email"}
            value={user["email"]}
            autoFocus={() => setIsFocused(true)}
            autoCapitalize="none"
            style={[styles.input]}
            onChangeText={(email) => setUser({ ...user, email })}
          />
          <TextInput
            label={"Password"}
            value={user["password"]}
            secureTextEntry
            onFocus={() => setIsFocused(true)}
            autoCapitalize="none"
            style={[styles.input]}
            onChangeText={(pass) => setUser({ ...user, password: pass })}
          />
          <TextInput
            label={"Address"}
            value={user["address"]}
            style={[styles.input]}
            onChangeText={(data) => setUser({ ...user, address: data })}
          />
          <TextInput
            label={"State"}
            value={user["state"]}
            style={[styles.input]}
            onChangeText={(st) => setUser({ ...user, state: st })}
          />
          <TextInput
            label={"Zip Code"}
            value={user["zipCode"]}
            style={[styles.input]}
            onChangeText={(data) => setUser({ ...user, zipCode: data })}
          />
          <TextInput
            label={"Phone"}
            value={user["phone"]}
            style={[styles.input]}
            onChangeText={(data) => setUser({ ...user, phone: data })}
          />
          <TextInput
            label={"Country"}
            value={user["country"]}
            style={[styles.input]}
            onChangeText={(data) => setUser({ ...user, country: data })}
          />
          <GeneralButton
            containerStyle={styles.loginStyle}
            title={"Create User"}
            icon={"creation"}
            onPress={registerHandler}
            isLoading={isLoading}
          />
          <View style={styles.btnContainer}>
            <Text style={{ color: light[100] }}>OR</Text>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: light[700],
    paddingBottom: 80,
  },
  input: {
    marginVertical: 10,
    width: 300,
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
