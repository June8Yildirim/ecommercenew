import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { Avatar } from "react-native-paper";
import { flame, light } from "../assets/Colors";
import Footer from "./ui/Footer";
import ButtonBox from "./ui/Buttons/ButtonBox";
import { Loader } from "./ui/Loader";
import { launchCameraAsync } from "expo-image-picker";
import ImagePicker from "./ImagePicker";
import SquareButton from "./ui/Buttons/SquareButton";

const ProfilePage = ({ route, navigation }) => {
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTakePhoto, setIsTakePhoto] = useState(false);

  const logoutHandler = () => {
    // navigation.navigate("login");
  };
  const onImageHandler = async () => {
    console.log("9999999999");
    setIsTakePhoto(true);

    // navigation.navigate("camera", { updateProfile: true });
    // const image = launchCameraAsync({
    //   allowsEditing: true,
    //   aspect: [16, 9],
    //   quality: 0.5,
    // });
  };

  return (
    <>
      {isTakePhoto && (
        <ImagePicker
          takeImageHandler={onImageHandler}
          setAvatar={setAvatar}
          setIsTakePhoto={setIsTakePhoto}
        />
      )}
      <View style={{ ...defaultStyle, paddingTop: 30 }}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={{ marginVertical: 30 }}>
              <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={styles.container}>
              {!avatar && (
                <Avatar.Image
                  source={require("../assets/images/defaultAvatar.png")}
                  size={100}
                  style={{ backgroundColor: flame[500] }}
                />
              )}
              {avatar && (
                <Image
                  source={{ uri: avatar }}
                  style={{ width: 100, height: 100, borderRadius: 100 }}
                />
              )}
              <TouchableOpacity onPress={() => onImageHandler()}>
                <Text style={{ color: flame[500] }}>Change Photo</Text>
              </TouchableOpacity>
              <Text style={styles.text}>{user?.name}</Text>
              <Text style={[styles.text, { fontWeight: "300", fontSize: 12 }]}>
                {user?.email}
              </Text>
            </View>

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
                  onPress={logoutHandler}
                />
              </View>
            </>
            <Footer />
          </>
        )}
      </View>
    </>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: flame[900],
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "800",
    marginTop: 10,
    color: light[100],
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
});
