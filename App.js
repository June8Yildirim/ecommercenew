import { useEffect } from "react";
import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Toast from "react-native-toast-message";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { StripeProvider } from "@stripe/stripe-react-native";
import { light } from "./assets/Colors";
SplashScreen.preventAutoHideAsync();

STRIPE_CLIENT_SECRET =
  "pk_test_51PQifZRuJqlYI89drEx24FTEzWq5MjhF7sxfUPCW5TFkxVD6vxqG0C9hfQKeLFqEiYkyEjuhVZvdNn7nhgfqqSRZ00es5CKzyh";
export default function App() {
  const [loaded, error] = useFonts({
    "poppins-thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-black": require("./assets/fonts/Poppins-Black.ttf"),
    "poppins-extra-bold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "poppins-italic-bold": require("./assets/fonts/Poppins-BoldItalic.ttf"),
    "poppins-italic": require("./assets/fonts/Poppins-Italic.ttf"),
    "poppins-italic-thin": require("./assets/fonts/Poppins-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <StripeProvider
      publishableKey={STRIPE_CLIENT_SECRET}
      merchantIdentifier="E-Shoppy Ecommerce"
      threeDSecureParams={{
        backgroundColor: light[200],
        timeout: 5,
      }}
    >
      <Provider store={store}>
        <Main />
        <Toast />
      </Provider>
    </StripeProvider>
  );
}
