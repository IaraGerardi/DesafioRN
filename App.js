// import 'react-native-gesture-handler';
import * as SecureStore from "expo-secure-store";
import LogIn from "./views/UserManagement/logInView";
import Register from "./views/UserManagement/registerView";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect } from "react";
import Home from "./views/Home/homeView";
import { Characters } from "./views/Characters/CharactersView";
import { LogOut } from "./views/UserManagement/logOut";

export default function App() {
  const [isSignedIn, setSignedIn] = useState(false);

  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  useEffect(() => {
    async function manageSession() {
      try {
        let secureStoreSession = await SecureStore.getItemAsync("session");
        console.log(secureStoreSession);
        if (!secureStoreSession) return setSignedIn(false);
        setSignedIn(true);
      } catch (err) {
        console.log(err);
      }
    }
    manageSession();
  });
  console.log("state:", isSignedIn);
 
  return isSignedIn ? (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Characters" component={Characters} />
        <Drawer.Screen name="Log Out" component={LogOut} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Log In" component={LogIn} />
        <Tab.Screen name="Sing Up" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "column",
  },
});
