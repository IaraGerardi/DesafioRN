import { Formik } from "formik";
import { useState } from "react";
import Input from "./components/Input";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Text, View, Button, StyleSheet } from "react-native";
import { SignupSchema } from "./validationSchemas/singUpSchema";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Register() {
  const [firebaseErrors, setFirebaseErrors] = useState();

  const handleSubmit = async (values) => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      //   _tokenResponse.idToken
      console.log(newUser);
    } catch (err) {
      setFirebaseErrors("Email already in use");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Input
            id="email"
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <Input
            id="password"
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <Text>{firebaseErrors}</Text>
          <View>
            <Button onPress={handleSubmit} title="Submit" />
            <Text>Do you have an account? Sing in!</Text>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "blue",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
