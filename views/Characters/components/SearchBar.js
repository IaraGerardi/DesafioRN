import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";

export function Search({ characters, setSearchedCharacters }) {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  const filter = (searchText) => {
    if (searchText == "") return setSearchedCharacters(characters);
    let searchResult = characters.filter((character) => {
      const name = character.name.toLowerCase();
      console.log(name, searchText);
      return name.includes(searchText);
    });
    setSearchedCharacters(searchResult);
  };

  useEffect(() => {
    filter(searchPhrase);
  }, [searchPhrase]);

  return (
    <View>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
    </View>
  );
}

export default SearchBar;

import React from "react";
import { StyleSheet } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <Entypo
            name="cross"
            size={25}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setClicked(false);
              setSearchPhrase("");
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  searchBar: {
    padding: 10,
    width: "95%",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  input: {
    width: "90%",
    fontSize: 20,
    marginLeft: 10,
  },
});
