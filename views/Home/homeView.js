import { Text, View, ScrollView } from "react-native";
import { Carrousel } from "../GlobalComponents/Carrousel/Carrousel";
import Footer from "../GlobalComponents/Footer";
import { Slider } from "../GlobalComponents/Slider";
import HomeCards from "./components/HomeCards";
import cartData from '../data/IndividualCarts.json';
import Card from "../GlobalComponents/Card/Card";

export default function Home() {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <Card data={cartData[0]} type="mainHomeCard"/>
      <HomeCards />
      {/* oficial trailer */}
      <Slider
        sliderType="latestContent"
        sliderTitle="LATEST TRAILERS, CLIPS & MORE"
      />
      <Slider
        sliderType="newReleases"
        sliderTitle="NEW RELEASES FROM DC UNIVERSE INFINITE ULTRA"
      />
      <Carrousel />
      <Slider
        sliderType="latestNews"
        sliderTitle="NEWS FROM AROUND THE MULTIVERSE"
      />
      <Card data={cartData[1]} type="joinDCUniverse"/>
      <Footer />
    </ScrollView>
  );
}
