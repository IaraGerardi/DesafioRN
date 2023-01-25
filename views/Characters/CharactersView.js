import { Text, StyleSheet, ScrollView } from "react-native";
import { Carrousel } from "../GlobalComponents/Carrousel/Carrousel";
import { Slider } from "../GlobalComponents/Slider";
import { CharactersFilter } from "./components/CharactersFilter";
import { Community } from "./components/Community";
import { Merch } from "./components/Merch";
import Footer from "../GlobalComponents/Footer";

export function Characters() {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <Text style={styles.viewTitle}>CHARACTERS</Text>
      <Carrousel />
      <Slider
        sliderType={"theWorldOfBatman"}
        sliderTitle="ENTER THE WORLD OF BATMAN"
      />
      <Community />
      <Merch />
      <Slider sliderType={"whoIsWho"} sliderTitle="WHO'S WHO" />
      <CharactersFilter />
      {/* <Footer /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewTitle: {
    flex: 1,
    height: 50,
    fontSize: 25,
    color: "white",
    fontWeight: "500",
    backgroundColor: "#080845",
    textAlignVertical: "center",
  }
});
