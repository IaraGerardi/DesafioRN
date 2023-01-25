import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    },
    errorMessage: {
      color: "grey",
      fontSize: 14,
      width: 150,
    },
    // submit button: es celeste con texto blaco
    submitButton: {
      width: 130,
      padding: 10,
      borderRadius: 20,
      marginVertical: 10,
      backgroundColor: "#429eff",
    },
    submitButtonText: {
      color: "white",
      fontWeight: "600",
      textAlign: "center",
    },
    // redirect button: es blanco con texto celeste y borde celeste
    redirectButton: {
      width: 130,
      padding: 10,
      borderWidth: 2,
      borderRadius: 20,
      borderColor: "#429eff",
    },
    redirectButtonText: {
      color: "#429eff",
      fontWeight: "600",
      textAlign: "center",
    },
  });
  