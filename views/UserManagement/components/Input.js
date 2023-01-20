import { View, TextInput, StyleSheet, Text } from "react-native";

export default function Input({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  id,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleChange(id)}
        onBlur={handleBlur(id)}
        placeholder={id}
        value={values[id]}
        style={styles.input}
      />
      {errors[id] && touched[id] ? <Text style={styles.errorMessage}>{errors[id]}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "grey",
    backgroundColor: "white",
    width: "70%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
  },
  errorMessage: {},
  inputContainer: {
    backgroundColor: "yellow",
    alignItems: "center",
    width: "100%",
  },
});
