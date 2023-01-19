import * as Yup from "yup";
import { Formik } from "formik";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .email()
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
    )
    .required("Required"),
});

export default function Register() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={async (values) => {
        console.log(values);
        try {
          const newDoc = await addDoc(collection(db, "users"), { values });
          console.log(newDoc);
        } catch (err) {
          console.log(err);
        }
      }}
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
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              placeholder="username"
              value={values.username}
              style={styles.input}
            />
            {errors.username && touched.username ? (
              <Text>{errors.username}</Text>
            ) : null}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="email"
              value={values.email}
              style={styles.input}
            />
            {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="password"
              value={values.password}
              style={styles.input}
            />
            {errors.password && touched.password ? (
              <Text>{errors.password}</Text>
            ) : null}
          </View>
          <Button onPress={handleSubmit} title="Submit" />
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
  input: {
    backgroundColor: "white",
    width: "70%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
  },
  inputContainer: {
    backgroundColor: "yellow",
    alignItems: "center",
    width: "100%",
  },
});
