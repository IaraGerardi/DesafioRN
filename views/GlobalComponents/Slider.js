import axios from "axios";
import { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Card from "./Card";
import sliderData from '../data/SliderData.json'

export default function Slider({ sliderType }) {

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        nestedScrollEnabled={true}
        data={sliderData[sliderType]}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Card data={item} type={sliderType} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "red",
    alignItems: "center",
  },
});
