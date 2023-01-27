import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function FilterCharacters({ filterOptions, activeFilters, setActiveFilters }) {
  const [openFilterMenu, setFilterMenu] = useState({
    alingment: false,
    type: false,
  });

  const openMenu = (filter) => {
    setFilterMenu({ ...openFilterMenu, [filter]: !openFilterMenu[filter] });
  };

  const handleFilter = (filter, option) => {
    setActiveFilters({ ...activeFilters, [filter]: option });
  };

  // console.log(activeFilters);
  return (
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
                <TouchableOpacity style={styles.optionContainer}
                  onPress={() => handleFilter(filter.name, filter.options[0])}
                >
                  <Text style={styles.optionTitle}>{filter.options[0]}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionContainer}
                  onPress={() => handleFilter(filter.name, filter.options[1])}
                >
                  <Text style={styles.optionTitle}>{filter.options[1]}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionContainer}
                  onPress={() => handleFilter(filter.name, filter.options[2])}
                >
                  <Text style={styles.optionTitle}>{filter.options[2]}</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        );
      })}
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
