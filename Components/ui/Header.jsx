import { StyleSheet } from "react-native";
import React from "react";
import BackButton from "./Buttons/BackButton";
import CartButton from "./Buttons/CartButton";

const Header = ({ back, emptyCart = false }) => {
  return (
    <>
      {back && <BackButton />}
      <CartButton emptyCart={emptyCart} />
    </>
  );
};

export default Header;

const styles = StyleSheet.create({});
