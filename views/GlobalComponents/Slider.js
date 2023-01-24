import axios from "axios";
import { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Card from "./Card/Card";
import sliderData from "../../data/SliderData.json";

export function Slider({ sliderTitle, sliderType }) {
  return (
    <View style={styles.container}>
      <Text>{sliderTitle}</Text>
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
    height: '100%',
    flexDirection: "column",
    backgroundColor: 'red',
    justifyContent: "center",
    margin: 5,
    alignItems: "center",
  },
  title:{
    
  }
});
