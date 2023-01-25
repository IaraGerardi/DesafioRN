import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export function Merch() {
  const data = [
    {
      title: "DIGITAL COMICS",
      icon: "book",
    },
    {
      title: "DC MERCHANDISE",
      icon: "shopping-cart",
    },
    {
      title: "PRINT SUBSCRIPTIONS",
      icon: "tags",
    },
    {
      title: "COMIC SHOP LOCATOR",
      icon: "map",
    },
  ];

  return (
    <View style={styles.mainContainer}>
      {data.map((item) => {
        return (
          <View key={item.icon} style={styles.subContainer}>
            <Icon name={item.icon} size={40} color="white" light />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: 150,
    flexDirection: "row",
    paddingHorizontal: 15,
    backgroundColor: "#429eff",
    justifyContent: "space-around",
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  title: {
    height: 30,
    fontSize: 10,
    color: "white",
    fontWeight: '700',
  },
});
