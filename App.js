import * as SecureStore from "expo-secure-store";
import Slider from "./views/GlobalComponents/Slider";
import LogIn from "./views/UserManagement/logInView";
import Register from "./views/UserManagement/registerView";
import { View, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [isSignedIn, setSignedIn] = useState(false);
  
  useEffect(() => {
    async function getValue() {
      let secureStoreSession = await SecureStore.getItemAsync("session");
      setSignedIn(secureStoreSession);
      console.log("session:", secureStoreSession);
    }
    getValue();
  });

  return (
    <View style={styles.container}>
      <LogIn />
      <Register />
    </View>
  );
  // return isSignedIn ? (
  //   <>
  //     <Stack.Screen name="Home" component={Home} />
  //     <Stack.Screen name="Profile" component={Profile} />
  //     <Stack.Screen name="Cart" component={Cart} />
  //   </>
  // ) : (
  //   <>
  //     <LogIn />
  //   </>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "red",
    alignItems: "center",
  },
});
