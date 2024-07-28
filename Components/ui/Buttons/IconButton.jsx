import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

const IconButton = ({
  color,
  title,
  size,
  icon,
  onPress,
  backgroundColor,
  style,
  textColor = "#fff",
}) => {
  return (
    <TouchableOpacity style={style} activeOpacity={0.8} onPress={onPress}>
      <Avatar.Icon
        icon={icon}
        size={size}
        color={color}
        style={{ backgroundColor: backgroundColor, alignSelf: "center" }}
      />
      {title && (
        <Text style={{ color: textColor, textAlign: "center" }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default IconButton;
