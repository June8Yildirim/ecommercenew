import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProductDetailsScreen from "./Screens/ProductDetailScreen";
import Toast from "react-native-toast-message";
import CartScreen from "./Screens/CartScreen";
import ConfirmOrderScreen from "./Screens/ConfirmOrderScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import ForgetPasswordScreen from "./Screens/ForgetPasswordScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import OneTimePasswordScreen from "./Screens/OneTimePasswordScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import AdminScreen from "./Screens/AdminScreens/AdminScreen";
import UpdateProfileScreen from "./Screens/UpdateProfileScreen";
import UpdatePasswordScreen from "./Screens/UpdatePasswordScreen";
import SignOutScreen from "./Screens/SignOutScreen";
import OrdersScreen from "./Screens/OrdersScreen";
import CreateProductScreen from "./Screens/AdminScreens/CreateProductScreen";
import CreateCategoryScreen from "./Screens/AdminScreens/CreateCategoryScreen";
import UpdateProductScreen from "./Screens/UpdateProductScreen";
import CategoriesScreen from "./Screens/AdminScreens/CategoriesScreen";
import AdminOrdersScreen from "./Screens/AdminScreens/AdminOrdersScreen";
import CameraScreen from "./Screens/CameraScreen";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/store/actions/auth/login";
import OrderHistoryScreen from "./Screens/UserScreen/OrdersHistoryScreen";

const Stack = createNativeStackNavigator();

export default function Main() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("MAin", isAuthenticated);
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="forgetpassword"
            component={ForgetPasswordScreen}
            options={{ title: "Forget Password" }}
          />
          <Stack.Screen
            name="signup"
            component={SignUpScreen}
            options={{ title: "Create User Screen" }}
          />
          <Stack.Screen
            name="onetimepassword"
            component={OneTimePasswordScreen}
            options={{ title: "One Time Password" }}
          />
          <Stack.Screen
            name="profile"
            component={ProfileScreen}
            options={{ title: "Profile" }}
          />
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="createproduct"
            component={CreateProductScreen}
            options={{ title: "Product Creation " }}
          />
          <Stack.Screen
            name="categories"
            component={CategoriesScreen}
            options={{ title: "Categories" }}
          />
          <Stack.Screen
            name="createcategory"
            component={CreateCategoryScreen}
            options={{ title: "Category Creation " }}
          />
          <Stack.Screen
            name="updateproduct"
            component={UpdateProductScreen}
            options={{ title: "Update Product" }}
          />
          <Stack.Screen
            name="details"
            component={ProductDetailsScreen}
            options={{ title: "Product Details" }}
          />
          <Stack.Screen
            name="cart"
            component={CartScreen}
            options={{ title: "Cart Details" }}
          />
          <Stack.Screen
            name="confirmOrder"
            component={ConfirmOrderScreen}
            options={{ title: "Order Confirmation" }}
          />
          <Stack.Screen
            name="payment"
            component={PaymentScreen}
            options={{ title: "Proceed To Payment" }}
          />
          <Stack.Screen
            name="admin"
            component={AdminScreen}
            options={{ title: "Admin" }}
          />
          <Stack.Screen
            name="updateprofile"
            component={UpdateProfileScreen}
            options={{ title: "Update Profile" }}
          />
          <Stack.Screen
            name="adminorders"
            component={AdminOrdersScreen}
            options={{ title: "Admin Orders" }}
          />
          <Stack.Screen
            name="orders"
            component={OrderHistoryScreen}
            options={{ title: "Order History" }}
          />
          <Stack.Screen
            name="order"
            component={OrdersScreen}
            options={{ title: "Order Summary" }}
          />
          <Stack.Screen
            name="updatepassword"
            component={UpdatePasswordScreen}
            options={{ title: "Update Password" }}
          />
          <Stack.Screen
            name="signout"
            component={SignOutScreen}
            options={{ title: "Sign Out" }}
          />
          <Stack.Screen
            name="camera"
            component={CameraScreen}
            options={{ title: "Camera" }}
          />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="bottom" bottomOffset={60} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
