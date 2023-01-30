import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function FilterCharacters() {
  const [openFilterMenu, setFilterMenu] = useState({
    alingment: false,
    type: false,
  });

  const filterOptions = [
    { name: "alignment", options: ["Hero", "Neutral", "AntiHero"] },
    { name: "type", options: ["Individual", "Places", "Teams"] },
  ];

  const openMenu = (filter) => {
    setFilterMenu({ ...openFilterMenu, [filter]: !openFilterMenu[filter] });
  };

  return (
    <View>
      <Text>FILTERS</Text>
      <View style={styles.mainContainer}>
        {filterOptions.map((filter) => {
          return (
            <View key={filter.name} style={styles.filterContainer}>
              <TouchableOpacity
                onPress={() => {
                  openMenu(filter.name);
                }}
              >
                <Text>{filter.name}</Text>
              </TouchableOpacity>
              {openFilterMenu[filter.name] && (
                <View>
                  {filter.options.map((option) => (
                    <TouchableOpacity style={styles.optionContainer}>
                      <Text style={styles.optionTitle}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default FilterCharacters;

const styles = StyleSheet.create({
  mainContainer: {},
  mainTitle: {},
  filterContainer: {},
  filterName: {},
  optionContainer: {},
  optionTitle: {},
});
