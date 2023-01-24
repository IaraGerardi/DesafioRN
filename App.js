import React from "react";
import Router from "./RoutesManager";
import { ContextProvider } from "./Context/GlobalContext";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ContextProvider>
  );
}
