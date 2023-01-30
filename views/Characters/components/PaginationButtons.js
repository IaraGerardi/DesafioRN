import React from "react";
// import Icon from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/AntDesign";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function PaginationButtons({ page, setPage }) {
  const minPage = () => {
    setPage(1);
  };
  const prevPage = () => {
    setPage((prev) => prev - 1);
  };
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const maxPage = () => {
    setPage(10);
  };

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        onPress={minPage}
        disabled={page <= 1}
        style={page > 1 ? styles.button : styles.unavailableButton}
      >
        <Icon name="doubleleft" size={30} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={prevPage}
        disabled={page <= 1}
        style={page > 1 ? styles.button : styles.unavailableButton}
      >
        <Icon name="left" size={30} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.pageNumber}>{page}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={nextPage}
        disabled={page > 9}
        style={page < 10 ? styles.button : styles.unavailableButton}
      >
        <Icon name="right" size={30} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={page > 9}
        onPress={maxPage}
        style={page < 10 ? styles.button : styles.unavailableButton}
      >
        <Icon name="doubleright" size={30} color="grey" />
      </TouchableOpacity>
    </View>
  );
}

export default PaginationButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    width: 400,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  pageNumber: { textAlign: "center", fontWeight: "700", fontSize: 23 },
  button: { justifyContent: "center", width: 35, height: 45 },
  unavailableButton: { justifyContent: "center", opacity: 0.5 },
});
