import Card from "./Card/Card";
import sliderData from "../../data/SliderData.json";
import { View, Text, FlatList, StyleSheet } from "react-native";

export function Slider({ sliderTitle, sliderType }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title[sliderType]}>{sliderTitle}</Text>
      <FlatList
        horizontal={true}
        nestedScrollEnabled={true}
        data={sliderData[sliderType]}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Card data={item} type={sliderType} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    padding: 15,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    latestContent: {
      fontSize: 25,
      fontWeight: "700",
      textAlign: "left",
      paddingVertical: 15,
    },
    newReleases: {
      fontSize: 25,
      fontWeight: "700",
      textAlign: "left",
      paddingVertical: 15,
    },
    latestNews: {
      fontSize: 25,
      fontWeight: "700",
      textAlign: "left",
      paddingVertical: 15,
    },
    theWorldOfBatman: {
      fontSize: 20,
      color: "#080845",
      fontWeight: "700",
      paddingVertical: 15,
    },
    whoIsWho: {
      fontSize: 45,
      color: "#429eff",
      fontWeight: "700",
      textAlign: "left",
      paddingVertical: 15,
    },
  },
});
