import { Formik } from "formik";
import { useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import Input from "./components/Input";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as SecureStore from "expo-secure-store";
import { LogInSchema } from "./validationSchemas/logInSchema";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles/formStyles";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function LogIn({ navigation }) {
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
      logIn();
    } catch (err) {
      console.log(err);
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
            <View>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitButtonText}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.redirectButton}
                onPress={() => {
                  navigation.navigate("Sign Up");
                }}
              >
                <Text style={styles.redirectButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.errorMessage}>{firebaseErrors}</Text>
          </View>
        )}
      </Formik>
    </View>
  );
}
