import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
// import Cart from "./views/cart/cartView";
import Home from "./views/Home/homeView";
// import LogIn from "./views/LogIn/logInView";
// import Profile from "./views/profile/profileView";

export default function App() {
  // const [key, onChangeKey] = useState('Your key here');
  const [isSignedIn, setSignedIn] = useState(false);
  // const [value, onChangeValue] = useState('Your value here');

  // async function saveValue(key, value) {
  //   await SecureStore.setItemAsync(key, value);
  // }
  // async function getValue(key) {
  //   let result = await SecureStore.getItemAsync(key);
  //   if (result) {
  //     alert("🔐 Here's your value 🔐 \n" + result);
  //   } else {
  //     alert("No values stored under that key.");
  //   }<View styles={styles}><Home /></View>
  // }

  return <View styles={styles}><Home /></View>;
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
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
