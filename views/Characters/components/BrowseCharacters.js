import axios from "axios";
import { useEffect, useState } from "react";
import FilterCharacters from "./FilterCharacters";
import { View, Text, Image, StyleSheet } from "react-native";
import CharactersList from "./CharactersList";
import PaginationButtons from "./PaginationButtons";
import { Search } from "./SearchBar";

export function BrowseCharacters() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [searchedCharacters, setSearchedCharacters] = useState([]);

  const URI =
    "https://g0vov8z0z9.execute-api.us-east-1.amazonaws.com/Characters/data";

  // const URI = 'http://190.173.113.169:8080/characters'
  
  const getCharactersData = async () => {
    try {
      const res = await axios.get(URI);
      setCharacters(res.data.body);
      setSearchedCharacters(res.data.body)
    } catch (err) {
      console.info(err.message);
    }
  };

  useEffect(() => {
    getCharactersData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>BROWSE CHARACTERS</Text>
      {/* <FilterCharacters/> */}
      <Search characters={characters} setSearchedCharacters={setSearchedCharacters} />
      <CharactersList characters={searchedCharacters} />
      {/* <PaginationButtons page={page} setPage={setPage} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  mainTitle: {
    fontSize: 33,
    color: "#429eff",
    fontWeight: "700",
    textAlign: "left",
    paddingVertical: 15,
  },
  charactersContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
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
