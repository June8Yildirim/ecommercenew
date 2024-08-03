import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import {
  View,
  Alert,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import IconButton from "./ui/Buttons/IconButton";
import { flame, light } from "../assets/Colors";

function ImagePickerGalery({ setIsTakePhoto, setAvatar }) {
  const [selectedImage, setSelectedImage] = useState("");
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app.",
      );

      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (!image.canceled) {
      setSelectedImage(image.assets[0].uri);
    }
  };
  const imageSelectionHandler = () => {
    setAvatar(selectedImage);
    setIsTakePhoto(false);
  };
  return (
    <View>
      <View style={styles.container}>
        {selectedImage && (
          <TouchableOpacity onPress={imageSelectionHandler}>
            <Image
              source={{ uri: selectedImage }}
              style={{ width: 200, height: 200 }}
            />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <IconButton
          backgroundColor={flame[200]}
          color={light[100]}
          icon="camera"
          textColor={flame[900]}
          onPress={takeImageHandler}
          title={"Capture Image"}
        />
        <IconButton
          icon={"cancel"}
          backgroundColor={flame[200]}
          color={light[100]}
          textColor={flame[900]}
          onPress={() => setIsTakePhoto(false)}
          title={"Capture Image"}
        />
      </View>
    </View>
  );
}

// 450 492 4104
// 514 697 1500
// 514 305 1616 fre cimoi
export default ImagePickerGalery;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
// {!selectedImage ? (
//   <View style={{ marginVertical: 8 }}>
//     <Text
//       style={{
//         fontSize: 18,
//         textAlign: "center",
//         color: flame[900],
//       }}
//     >
//       No image preview taken yet
//     </Text>
//   </View>
// ) : (
//           <FlatList
//             data={selectedImage}
//             keyExtractor={(item, index) => index}
//             renderItem={(item) => (
//               <Image
//                 source={{ uri: item }}
//                 style={{ width: 200, height: 200 }}
//               />
//             )}
//             horizontal
//           />
