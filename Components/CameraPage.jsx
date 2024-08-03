import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Camera,
  CameraView,
  ImagePicker,
  useCameraPermissions,
} from "expo-camera";
import { CameraType } from "expo-camera/build/legacy/Camera.types";
import IconButton from "./ui/Buttons/IconButton";
import { flame } from "../assets/Colors";

const CameraPage = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);
  if (permission)
    return (
      <View>
        <Text>fsf</Text>
      </View>
    );
  if (permission && !permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  //   }
  // }, [permission]);
  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false)
      return alert("Permission to access galery is required");
    const data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  };
  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  const cameraRef = useRef(null);
  const clickPictureHandler = () => {};
  return (
    <View style={{ flex: 1 }}>
      <CameraView style={styles.container} facing={facing}>
        <View
          style={{
            flexDirection: "row",
            bottom: 10,
            width: "100%",
            justifyContent: "space-evenly",
            position: "absolute",
          }}
        >
          <IconButton
            icon={"image"}
            onPress={() => openImagePicker()}
            backgroundColor={flame[500]}
          />
          <IconButton
            icon={"camera"}
            onPress={clickPictureHandler}
            backgroundColor={flame[500]}
          />
          <IconButton
            icon={"camera-flip"}
            onPress={toggleCameraFacing}
            backgroundColor={flame[500]}
          />
        </View>
      </CameraView>
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
});
