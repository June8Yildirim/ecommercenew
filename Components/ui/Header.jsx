import { StyleSheet } from "react-native";
import React from "react";
import BackButton from "./Buttons/BackButton";
import CartButton from "./Buttons/CartButton";

const Header = ({ back, hasCard = true, emptyCart = false }) => {
  return (
    <>
      {back && <BackButton />}
      {hasCard && <CartButton emptyCart={emptyCart} />}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({});
