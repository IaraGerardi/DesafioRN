import { useEffect } from "react";
import { appReducer } from "./AppReducer";
import * as SecureStore from "expo-secure-store";
import { createContext, useReducer } from "react";

const initialState = { session: false };

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const logIn = () => {
    dispatch({ type: "LOG_IN" });
  };

  const logOut = () => {
    dispatch({ type: "LOG_OUT" });
  };

  useEffect(() => {
    async function manageSession() {
      try {
        let secureStoreSession = await SecureStore.getItemAsync("session");
        if (!secureStoreSession) return;
        dispatch({ type: "LOG_IN" });
      } catch (err) {
        console.log(err);
      }
    }
    manageSession();
  },[]);

  return (
    <GlobalContext.Provider value={{ ...state, logIn, logOut }}>
      {children}
    </GlobalContext.Provider>
  );
};
