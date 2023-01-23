import { Button, Image, Text, View, StyleSheet } from "react-native";

export default function CarrouselItem({ data }) {
  const { title, subtitle, imageLink, buttonText } = data;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.title}>{title}</Text>
        <Button style={styles.button} title={buttonText} />
      </View>
      <Image style={styles.image} source={{ uri: imageLink }} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    backgroundColor: 'yellow'
  },
  subContainer: {
    // flex: 1,
  },
  title: {
    // flex: 1,
  },
  button: {
    // flex: 1,
  },
  image: {
    width: 20,
    height: 20,
    // flex: 1,
  },

  characters: {
    mainContainer: {},
    subContainer: {},
    title: {},
    button: {},
    image: {},
  },
  buttons: {
    button: {},
    defaultButton: {},
    selectedButton: {},
  },
});
