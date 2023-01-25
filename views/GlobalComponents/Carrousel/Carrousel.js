import data from "../../../data/CarrouselData.json";
import CarrouselItem from "./components/CarrouselItem";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { View, StyleSheet, Dimensions } from "react-native";

export function Carrousel() {
  return (
    <View>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={2}
        showPagination
      >
        {data.map((data) => (
          <CarrouselItem key={data.id} data={data} />
        ))}
      </SwiperFlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
