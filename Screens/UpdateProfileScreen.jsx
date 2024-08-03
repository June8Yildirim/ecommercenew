import React from "react";
import UpdateProfilePage from "../Components/UpdateProfilePage";
import { useSelector } from "react-redux";
import { print } from "../utils/print";

export default function UpdateProfileScreen({ route, navigation }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <UpdateProfilePage user={user} route={route} navigation={navigation} />
  );
}
