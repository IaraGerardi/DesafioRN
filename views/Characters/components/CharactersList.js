import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function CharactersList({ characters }) {
  return (
    <View style={styles.charactersContainer}>
      {characters?.map((item) => {
        return (
          <View key={item.photo} style={styles.characterBox}>
            <Image style={styles.characterImage} source={{ uri: item.photo }} />
            <Text style={styles.characterName}>{item.name}</Text>
          </View>
        );
      })}
      {characters.length < 1 && (
        <Text style={styles.errorMessage}>No se encontraron personajes</Text>
      )}
    </View>
  );
}

export default CharactersList;

const styles = StyleSheet.create({
  charactersContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  characterBox: {
    width: 150,
    height: 320,
    margin: 10,
  },
  characterImage: {
    width: 150,
    height: 280,
  },
  characterName: { fontWeight: "600", textTransform: "uppercase" },
  errorMessage: {
    color: "red",
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 20,
  },
});
