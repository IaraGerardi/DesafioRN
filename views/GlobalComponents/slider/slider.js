import { View, Text, FlatList } from "react-native";
import SliderItem from "./components/sliderItem";

export default function Slider({sliderData}) {
  return (
    <View>
      <FlatList
        data={sliderData}
        renderItem={SliderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
