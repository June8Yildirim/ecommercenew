import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { defaultStyle } from "../assets/sytles";
import { flame, light, liver } from "../assets/Colors";
import Header from "./ui/Header";
import Carousel from "react-native-snap-carousel";
import Toast from "react-native-toast-message";
import GeneralButton from "./ui/Buttons/GeneralButton";
import IncrementDecrementButtons from "./ui/Buttons/IncrementDecrementButtons";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const ProductDetailsPage = ({ route, navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const isCarouselRef = useRef();
  const itemWidth = deviceWidth;
  const sliderWidth = deviceWidth;
  const { id } = route.params;
  const product = {
    title: "Macbook Pro",
    price: 1000,
    stock: 23,
    description:
      "When rendering a large number of elements, you can use the 'windowSize' property to control how many items of the current element are rendered. The default is full rendering. After testing without this property, frames will drop when rendering 200 empty views. After setting this property, rendering 1000 empty views is still smooth. (The specific number depends on the phone model tested) ",
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
  const imageHeight = deviceHeight * 0.5;
  return (
    <View style={{ ...defaultStyle, padding: 0, backgroundColor: flame[500] }}>
      <Header back={true} />
      <View style={[styles.carouselContainer, { height: imageHeight }]}>
        <Carousel
          layout="default"
          itemWidth={itemWidth}
          sliderWidth={sliderWidth}
          data={product.images}
          renderItem={(item) => CarouselImages(item)}
        />
      </View>
      <ProductDetailItem
        title={product.title}
        description={product.description}
        price={product.price}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </View>
  );
};

const ProductDetailItem = ({
  title,
  description,
  price,
  setQuantity,
  quantity,
}) => {
  const stock = 0;
  const decrementBtn = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };
  const incrementBtn = () => {
    if (quantity > stock) return;
    setQuantity((prev) => prev + 1);
  };
  const imageHeight = deviceHeight * 0.5;
  const addCartHandler = () => {
    if (stock === 0) {
      console.log(
        "Stock is empty, We will remind you when it will be stock again",
      );
      Toast.show({
        type: "error",
        text2: "We will remind you when it will be stock again",
        text1: "Out of Stock",
      });
      return;
    }
    Toast.show({ type: "success", text1: "Added to Cart" });
  };
  return (
    <View style={[styles.itemContainer, { height: imageHeight }]}>
      <Text>{title}</Text>
      <Text>${price}</Text>
      <Text style={styles.description} numberOfLines={6}>
        {description}
      </Text>
      <IncrementDecrementButtons
        quantity={quantity}
        incrementBtn={incrementBtn}
        decrementBtn={decrementBtn}
      />
      <View>
        <GeneralButton title="Add To Cart" />
      </View>
    </View>
  );
};
const CarouselImages = ({ item }) => {
  return (
    <View key={item.id} style={styles.carousel}>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
  );
};
export default ProductDetailsPage;

const styles = StyleSheet.create({
  carousel: {
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  itemContainer: {
    backgroundColor: light[100],
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  description: {
    letterSpacing: 1,
    lineHeight: 20,
    marginVertical: 15,
  },
  carouselContainer: {},
  image: {
    width: deviceWidth,
    height: 300,
  },
  addCartContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: flame[900],
    justifyContent: "center",
    paddingVertical: 8,
    gap: 10,
    borderRadius: 10,
    marginVertical: 15,
  },
});
