import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync,
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
import Toast from "react-native-toast-message";

function ImagePicker({ setIsTakePhoto, setAvatar }) {
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
  const chooseImageFromLibrary = async () => {
    const permission = await requestMediaLibraryPermissionsAsync();
    if (!permission)
      return Toast.show({
        type: "error",
        text2: "Needs Permission to access the galery",
      });

    const data = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    setSelectedImage(data.assets[0]);
    if (selectedImage) {
      setAvatar(selectedImage);
      setIsTakePhoto(false);
    }
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
      setSelectedImage(image.assets[0]);
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
          icon="image"
          textColor={flame[900]}
          onPress={chooseImageFromLibrary}
          title={"Galery"}
          size={40}
          style={{ marginHorizontal: 20 }}
        />
        <IconButton
          backgroundColor={flame[200]}
          color={light[100]}
          icon="camera"
          textColor={flame[900]}
          onPress={takeImageHandler}
          title={"Camera"}
          size={40}
          style={{ marginHorizontal: 20 }}
        />
        <IconButton
          icon={"cancel"}
          backgroundColor={flame[200]}
          color={light[100]}
          textColor={flame[900]}
          onPress={() => setIsTakePhoto(false)}
          size={40}
          style={{ marginHorizontal: 20 }}
          title={"Cancel"}
        />
      </View>
    </View>
  );
}

// 450 492 4104
// 514 697 1500
// 514 305 1616 fre cimoi
export default ImagePicker;

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
