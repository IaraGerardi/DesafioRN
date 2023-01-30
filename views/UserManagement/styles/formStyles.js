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
    width: 150,
    fontSize: 14,
    color: "grey",
    marginVertical: 10,
    textAlign: 'center'
  },
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
