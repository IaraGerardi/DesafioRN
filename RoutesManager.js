import { useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";

import LogIn from "./views/UserManagement/logInView";
import Register from "./views/UserManagement/registerView";

import Home from "./views/Home/homeView";
import { Characters } from "./views/Characters/CharactersView";
import { LogOut } from "./views/UserManagement/logOut";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Router() {
  const { session } = useContext(GlobalContext);

  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  return session ? (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Characters" component={Characters} />
      <Drawer.Screen name="Log Out" component={LogOut} />
    </Drawer.Navigator>
  ) : (
    <Stack.Navigator initialRouteName="Log In">
      <Stack.Screen name="Log In" component={LogIn} />
      <Stack.Screen name="Sign Up" component={Register} />
    </Stack.Navigator>
  );
}

export default Router;
