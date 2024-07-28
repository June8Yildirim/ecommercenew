import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PieChart } from "react-native-chart-kit";
import { flame } from "../assets/Colors";

const ChartsPage = ({ data }) => {
  const screenWidth = Dimensions.get("window").width * 0.9;
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    marginBottom: 10,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={180}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={flame[900]}
    />
  );
};

export default ChartsPage;

const styles = StyleSheet.create({});
