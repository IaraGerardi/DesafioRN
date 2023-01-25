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
      {errors[id] && touched[id] ? (
        <Text style={styles.errorMessage}>{errors[id]}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 230,
    padding: 3,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
  },
  errorMessage: {
    width: 230,
    color: "grey",
    textAlign: 'center'
  },
  inputContainer: {
    width: 250,
    height: 60,
    alignItems: "center",
  },
});
