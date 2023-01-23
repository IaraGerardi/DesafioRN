import { View, Button } from "react-native";
import * as SecureStore from "expo-secure-store";

export function LogOut() {
  console.log(value)
  return (
    <View>
      <Button
        title="Log Out"
        onPress={async () => {
          await SecureStore.deleteItemAsync("session");
        }}
      />
    </View>
  );
}
