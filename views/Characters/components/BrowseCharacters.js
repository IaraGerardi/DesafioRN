import axios from "axios";
import { Search } from "./SearchBar";
import { useEffect, useState } from "react";
import CharactersList from "./CharactersList";
import { View, Text, Image, StyleSheet } from "react-native";

export function BrowseCharacters() {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacters, setSearchedCharacters] = useState([]);

  const URI =
    "https://g0vov8z0z9.execute-api.us-east-1.amazonaws.com/Characters/data";

  const getCharactersData = async () => {
    try {
      const res = await axios.get(URI);
      setCharacters(res.data.body);
      setSearchedCharacters(res.data.body);
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
      <Search
        characters={characters}
        setSearchedCharacters={setSearchedCharacters}
      />
      <CharactersList characters={searchedCharacters} />
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
});
