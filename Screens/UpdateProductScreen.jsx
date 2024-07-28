import React from "react";
import UpdateProductPage from "../Components/UpdateProductPage";

export default function UpdateProductScreen({ route, navigation }) {
  const { id } = route.params;
  const product = {
    quantity: 2,
    name: "Macbook Air",
    price: 1000,
    productId: "air2",
    stock: 23,
    description:
      "When rendering a large number of elements, you can use the 'windowSize' property to control how many items of the current element are rendered. The default is full rendering. After testing without this property, frames will drop when rendering 200 empty views. After setting this property, rendering 1000 empty views is still smooth. (The specific number depends on the phone model tested) ",
    category: "Electronics",
    images: [
      {
        id: 0,
        url: "https://picsum.photos/id/11/200/300",
      },
      {
        id: 1,
        url: "https://picsum.photos/id/10/200/300",
      },
      {
        id: 2,
        url: "https://picsum.photos/id/12/200/300",
      },
    ],
  };
  return (
    <UpdateProductPage
      route={route}
      navigation={navigation}
      product={product}
    />
  );
}
