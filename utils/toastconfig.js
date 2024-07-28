import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { flame } from "../assets/Colors";
/*
  1. Create the config
*/
export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: "green",
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderLeftColor: "green",
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 13,
        fontWeight: "600",
        textAlign: "justify",
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderRightWidth: 5,
        borderRightColor: flame[500],
        borderLeftColor: flame[500],
      }}
      text1Style={{
        fontSize: 12,
        textAlign: "justify",
        fontWeight: "600",
      }}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
      text2Style={{
        fontSize: 12,
        textAlign: "justify",
        fontWeight: "600",
      }}
    />
  ),
};
