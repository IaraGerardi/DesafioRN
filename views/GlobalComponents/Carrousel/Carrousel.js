import { useState } from "react";
import data from "../../data/CarrouselData.json";
import CarrouselItem from "./components/CarrouselItem";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";

export function Carrousel() {
  const [itemActive, setActiveItem] = useState(0);

  const itemLess = () => {
    itemActive < 1
      ? setActiveItem(data.length - 1)
      : setActiveItem(itemActive - 1);
  };

  const itemPlus = () => {
    itemActive >= data.length - 1
      ? setActiveItem(0)
      : setActiveItem(itemActive + 1);
  };

  const carrouselButton = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setActiveItem(item.id - 1)}
        style={
          item.id - 1 === itemActive
            ? styles.activeButton
            : styles.inactiveButton
        }
      />
    );
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="arrow-left" size={20} color="black" onPress={itemLess} />
        <FlatList
          horizontal={true}
          data={data}
          renderItem={carrouselButton}
          keyExtractor={(item) => item.subtitle}
        />
        <Icon name="arrow-right" size={20} color="black" onPress={itemPlus} />
      </View>
      <CarrouselItem data={data[itemActive]} />
    </View>
  );
}

const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: "#2b7eff",
    width: 25,
    height: 25,
    margin: 5,
  },
  inactiveButton: {
    backgroundColor: "#8db9fc",
    width: 15,
    height: 15,
    margin: 5,
  },
});
