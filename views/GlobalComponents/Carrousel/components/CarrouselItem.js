import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function CarrouselItem({ data }) {
  const { title, subtitle, imageLink, buttonText } = data;

  return (
    <ImageBackground source={{ uri: imageLink }} style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  mainContainer: {
    width,
    flex: 1,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    width,
    flex: 1,
    height: 200,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "800",
  },
  subtitle: {
    color: "#28a7d1",
    fontWeight: "600",
  },
  button: {
    padding: 10,
    backgroundColor: "#429eff",
  },
  buttonText: {
    color: "white",
  },
  image: {
    width: 20,
    height: 20,
    resizeMode:'contain'
  },
});
