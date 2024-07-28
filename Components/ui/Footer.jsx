import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { flame, light } from "../../assets/Colors";
import IconButton from "./Buttons/IconButton";
import { useNavigation } from "@react-navigation/native";

const Footer = ({ activeRoute = "home" }) => {
  const isAuthenticated = false;
  const navigation = useNavigation();
  const shopping = activeRoute === "cart" ? "shopping" : "shopping-outline";
  const account = !isAuthenticated
    ? "login"
    : activeRoute === "profile"
      ? "account"
      : "account-outline";
  const navigateTo = isAuthenticated ? "profile" : "login";
  const home = activeRoute === "home" ? "home" : "home-outline";
  const dimensions = Dimensions.get("window");
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;
  return (
    <View style={[styles.container, { width: deviceWidth }]}>
      <View style={styles.textContainer}>
        <IconButton
          backgroundColor={flame[200]}
          color={flame[100]}
          size={50}
          icon={shopping}
          onPress={() => navigation.navigate("cart")}
        />
        <IconButton
          backgroundColor={flame[200]}
          color={light[100]}
          size={50}
          icon={account}
          onPress={() => navigation.navigate(navigateTo)}
        />
      </View>
      <View style={styles.homeBtn}>
        <IconButton
          backgroundColor={flame[200]}
          color={light[100]}
          size={50}
          icon={home}
          onPress={() => navigation.navigate("home")}
        />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: flame[200],
    borderTopRightRadius: 120,
    borderTopLeftRadius: 120,
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  homeBtn: {
    position: "absolute",
    width: 80,
    height: 80,
    backgroundColor: light[100],
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: -50,
  },
});
