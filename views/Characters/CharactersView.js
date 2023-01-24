import { View, Text, ScrollView } from "react-native";
import { Carrousel } from "../GlobalComponents/Carrousel/Carrousel";
import {Slider }from "../GlobalComponents/Slider";
import { CharactersFilter } from "./components/CharactersFilter";
import { Community } from "./components/Community";
import { Merch } from "./components/Merch";
import Footer from "../GlobalComponents/Footer";

export function Characters() {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <Text>characters</Text>
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
