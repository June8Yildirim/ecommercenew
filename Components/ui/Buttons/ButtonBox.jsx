import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SquareButton from "./SquareButton";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../utils/hooks/useAuth";
import { logout } from "../../../redux/store/actions/logout";

const ButtonBox = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const isloading = useAuth(navigation, dispatch, "login");
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <SquareButton
          icon={"format-list-bulleted-square"}
          title={"Orders"}
          onPress={() => navigation.navigate("orders")}
        />
        <SquareButton
          icon={"view-dashboard"}
          title={"Admin"}
          reverse={true}
          onPress={() => navigation.navigate("admin")}
        />
        <SquareButton
          icon={"face-agent"}
          title={"Profile"}
          onPress={() => navigation.navigate("updateprofile")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-evenly",
          flex: 1,
        }}
      >
        <SquareButton
          icon={"lastpass"}
          title={"Password"}
          onPress={() => navigation.navigate("updatepassword")}
        />
        <SquareButton
          icon={"exit-to-app"}
          title={"Sign Out"}
          onPress={() => logoutHandler()}
        />
      </View>
    </>
  );
};

export default ButtonBox;

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
});
