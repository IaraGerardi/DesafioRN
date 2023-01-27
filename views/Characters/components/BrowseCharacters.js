import axios from "axios";
import { useEffect, useState } from "react";
import FilterCharacters from "./FilterCharacters";
import { View, Text, Image, StyleSheet } from "react-native";

export function BrowseCharacters() {
  const [route, setRoute] = useState("");
  const [characters, setCharacters] = useState([]);

  const filterOptions = [
    { name: "alignment", options: ["Hero", "Neutral", "AntiHero"] },
    { name: "type", options: ["Individual", "Places", "Teams"] },
  ];
  const [activeFilters, setActiveFilters] = useState({
    alignment: null,
    type: null,
  });

  const URI =
    "https://q49vmnyalh.execute-api.us-east-1.amazonaws.com/Characters/characters";

  const getCharactersData = async () => {
    try {
      const res = await axios.get(`${URI}/${route}`);
      setCharacters(res.data.body);
    } catch (err) {
      console.info(err.message);
    }
  };

  const handleQuery = () => {
    const queriesArray = filterOptions
      .filter((filter) => activeFilters[filter.name])
      .map((filter) => `${filter.name}=${activeFilters[filter.name]}`);

    if (!queriesArray.length) return;
    if (queriesArray.length < 2) return setRoute(`${queriesArray[0]}`);

    const routeQuery = queriesArray.join("&");
    setRoute(routeQuery);
  };

  useEffect(() => {
    getCharactersData();
  }, []);

  useEffect(() => {
    handleQuery();
  }, [activeFilters]);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>BROWSE CHARACTERS</Text>
      <Text>FILTERS</Text>
      <FilterCharacters
        filterOptions={filterOptions}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <View style={styles.charactersContainer}>
        {characters?.map((item) => {
          return (
            <View key={item.photo} style={styles.characterBox}>
              <Image
                style={styles.characterImage}
                source={{ uri: item.photo }}
              />
              <Text style={styles.characterName}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mainTitle: {},
  charactersContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  characterBox: {
    width: 140,
    height: 300,
  },
  characterImage: {
    width: 140,
    height: 280,
  },
  characterName: {},
});
