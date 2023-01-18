import { Text, View, Button, ViewBase, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import CarrouselItem from "./components/CarrouselItem";

export function Carrousel({ carrouselStyle }) {
  const [data, setData] = useState([]);
  const [item, setItem] = useState(0);

  const itemLess = () => {
    item < 1 ? setItem(news.length - 1) : setItem(item - 1);
  };
  const itemPlus = () => {
    item >= news.length - 1 ? setItem(0) : setItem(item + 1);
  };

  const carrouselButton = ({ item }) => {
    <Button
      onClick={() => setItem(item)}
      styles={[
        styles.buttons.button,
        item === item.id
          ? styles.buttons.selectedButton
          : styles.buttons.defaultButton,
      ]}
    />;
  };

  return (
    <View>
      <View>
        <View onClick={itemLess}>
          {/* <Icon classname="w-5 h-5" type="leftArrow" width="24" height="24" /> */}
        </View>
        <FlatList
          data={data}
          renderItem={carrouselButton}
          keyExtractor={(item) => item.id}
        />
        <View onClick={itemPlus}>
          {/* <Icon classname="w-5 h-5" type="rightArrow" width="24" height="24" /> */}
        </View>
      </View>
      <CarrouselItem data={data[item]} style={styles[carrouselStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  newReleases: {
    mainContainer:{},
    subContainer:{},
    title:{},
    button:{},
    image:{}
  },
  latestContent: {
    mainContainer:{},
    subContainer:{},
    title:{},
    button:{},
    image:{}
  },
  news: {
    mainContainer:{},
    subContainer:{},
    title:{},
    button:{},
    image:{}
  },
  theWorldOfBatman: {
    mainContainer:{},
    subContainer:{},
    title:{},
    button:{},
    image:{}
  },
  whoIsWho: {
    mainContainer:{},
    subContainer:{},
    title:{},
    button:{},
    image:{}
  },
  buttons: {
    button: {},
    defaultButton: {},
    selectedButton: {},
  },
});
