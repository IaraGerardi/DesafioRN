import { Text, View } from "react-native";
import { Carrousel } from "../GlobalComponents/Carrousel/Carrousel";
import Footer from "../GlobalComponents/Footer/Footer";
import Header from "../GlobalComponents/Header/Header";
import Slider from "../GlobalComponents/slider/slider";

export default function Home() {
  return (
    <>
      <Text>Home</Text>
      <Header/>
      <Slider/>
      <Carrousel carrouselStyle={''}/>
      <Footer/>
    </>
  );
}
