import { Text, View, Image, StyleSheet } from "react-native";

export default function Footer() {
  const sectionsArray = [
    "Privacy policy",
    "Terms",
    "AD Choices",
    "Accesibility",
    "Gestionar preferencias",
  ];

  const sections = sectionsArray.join(" | ");
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.image}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/600px-DC_Comics_logo.svg.png",
        }}
      />
      <Text style={styles.sections}>{sections} </Text>
      <Text style={styles.subtitle}>© & ™ DC. ALL RIGHTS RESERVED</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 380,
    marginTop: 15,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: "#080845",
    justifyContent: "space-around",
  },
  image: {
    width: 120,
    height: 120,
  },
  sections: {
    fontSize: 25,
    color: "white",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },
});
