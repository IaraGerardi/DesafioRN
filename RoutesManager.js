import { useContext } from "react";
import { GlobalContext } from "./Context/GlobalContext";

import LogIn from "./views/UserManagement/logInView";
import Register from "./views/UserManagement/registerView";

import Home from "./views/Home/homeView";
import { Characters } from "./views/Characters/CharactersView";
import { LogOut } from "./views/UserManagement/logOut";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Router() {
  const { session } = useContext(GlobalContext);

  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  return session ? (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Characters" component={Characters} />
      <Drawer.Screen name="Log Out" component={LogOut} />
    </Drawer.Navigator>
  ) : (
    <Tab.Navigator>
      <Tab.Screen name="Log In" component={LogIn} />
      <Tab.Screen name="Sing Up" component={Register} />
    </Tab.Navigator>
  );
}

export default Router;
