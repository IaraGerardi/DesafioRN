import { View, Button } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

export function LogOut() {
  const { logOut } = useContext(GlobalContext);
  
  return (
    <View>
      <Button
        title="Log Out"
        onPress={async () => {
          await SecureStore.deleteItemAsync("session");
          logOut()
        }}
      />
    </View>
  );
}
