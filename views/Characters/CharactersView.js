import { Text, StyleSheet, ScrollView } from "react-native";
import { Carrousel } from "../GlobalComponents/Carrousel/Carrousel";
import { Slider } from "../GlobalComponents/Slider";
import { Community } from "./components/Community";
import { Merch } from "./components/Merch";
import Footer from "../GlobalComponents/Footer";
import { BrowseCharacters } from "./components/BrowseCharacters";

export function Characters() {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <Text style={styles.viewTitle}>CHARACTERS</Text>
      <Carrousel />
      <Slider
        sliderType="theWorldOfBatman"
        sliderTitle="ENTER THE WORLD OF BATMAN"
      />
      <Community />
      <Merch />
      <Slider sliderType="whoIsWho" sliderTitle="WHO'S WHO" />
      <BrowseCharacters/>
      <Footer />
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
    paddingHorizontal: 15,
    backgroundColor: "#080845",
    textAlignVertical: "center",
  },
});
