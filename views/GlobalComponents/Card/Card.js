import { StyleSheet } from "react-native";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { cardStyles } from "./CardStyles";

export default function Card({ data, type }) {
  const { title, subtitle, paragraph, imageLink, buttonText } = data;
  const style = cardStyles[type];
  return (
    <View style={style.mainContainer}>
      <Image style={style.image} source={{ uri: imageLink }} />
      {subtitle && <Text style={style.subtitle}>{subtitle}</Text>}
      <Text style={style.title}>{title}</Text>
      {paragraph && <Text style={style.paragraph}>{paragraph}</Text>}
      {buttonText && (
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
