import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';

export default function LogIn() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="email"
              value={values.email}
              style={{ borderColor: "grey", borderWidth: 1, borderRadius: 5, padding: 2 }}
            />
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="password"
              value={values.email}
              style={{ borderColor: "grey", borderWidth: 1, borderRadius: 5, padding: 2 }}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
