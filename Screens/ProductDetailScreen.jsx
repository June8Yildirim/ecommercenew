import React, { useEffect, useState } from "react";
import ProductDetailsPage from "../Components/ProductDetailsPage";

export default function ProductDetailsScreen({ route, navigation }) {
  return <ProductDetailsPage route={route} navigation={navigation} />;
}
