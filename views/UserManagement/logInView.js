import { Formik } from "formik";
import { useState, useContext } from "react";
// import { GlobalContext } from "./Context/GlobalContext";
import { GlobalContext } from "../../Context/GlobalContext";
import Input from "./components/Input";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as SecureStore from "expo-secure-store";
import { Text, View, Button, StyleSheet } from "react-native";
import { LogInSchema } from "./validationSchemas/logInSchema";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function LogIn() {
  const [firebaseErrors, setFirebaseErrors] = useState();
  const { logIn } = useContext(GlobalContext);

  async function saveValue(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  const handleSubmit = async (values) => {
    try {
      const session = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const sessionToken = session._tokenResponse.idToken;
      saveValue("session", sessionToken);
      logIn()
    } catch (err) {
      console.log(err)
      setFirebaseErrors("Email and/or password incorrect");
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={LogInSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
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
              <Text>Do you need to create an account? Sing up!</Text>
            </View>
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
