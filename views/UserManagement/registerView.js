import { Formik } from "formik";
import { useState } from "react";
import Input from "./components/Input";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Text, View, TouchableOpacity } from "react-native";
import { SignupSchema } from "./validationSchemas/singUpSchema";
import { styles } from "./styles/formStyles";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Register({ navigation }) {
  const [firebaseErrors, setFirebaseErrors] = useState();

  const handleSubmit = async (values) => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      navigation.navigate("Log In");
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
          {/* <Text>{firebaseErrors}</Text> */}
          <View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.redirectButton}
              onPress={() => {
                navigation.navigate("Log In");
              }}
            >
              <Text style={styles.redirectButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.errorMessage}>{firebaseErrors}</Text>
        </View>
      )}
    </Formik>
  );
}
