import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const cardStyles = StyleSheet.create({
  mainHomeCard: {
    mainContainer: {
      flex: 1,
      height: 700,
      marginVertical: 40,
      marginHorizontal: 15,
      alignContent: "center",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    image: {
      width: 380,
      height: 350,
    },
    subtitle: {
      fontSize: 20,
      alignSelf: "center",
      marginHorizontal: 5,
    },
    title: {
      fontWeight: "700",
      fontSize: 32,
    },
    paragraph: { color: "grey", fontSize: 17 },
    button: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 20,
      alignItems: "center",
    },
    buttonText: {
      fontWeight: "700",
    },
  },
  homeCards: {
    mainContainer: {
      width,
      flex: 1,
      height: 600,
      marginVertical: 40,
      alignItems: "center",
      paddingHorizontal: 15,
      flexDirection: "column",
      justifyContent: "space-around",
    },
    image: {
      width: 380,
      height: 350,
    },
    subtitle: {
      letterSpacing: 2,
      color: "light-grey",
    },
    title: {
      fontSize: 32,
      fontWeight: "700",
    },
    button: {
      width: 150,
      padding: 10,
      borderWidth: 0.5,
      borderRadius: 20,
    },
    buttonText: {
      color: "grey",
      fontWeight: "700",
      textAlign: "center",
    },
  },
  latestContent: {
    mainContainer: {
      flex: 1,
      height: 200,
      width: 140,
      paddingVertical: 30,
      marginHorizontal: 10,
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    image: {
      width: 130,
      height: 60,
    },
    subtitle: {
      fontSize: 10,
      letterSpacing: 2,
      color: "light-grey",
    },
    title: {
      fontSize: 15,
      fontWeight: "700",
      paddingHorizontal: 5,
    },
  },
  newReleases: {
    mainContainer: {
      flex: 1,
      margin: 5,
      height: 350,
      marginHorizontal: 10,
      flexDirection: "column",
      justifyContent: "space-around",
    },
    image: {
      width: 120,
      height: 200,
    },
    title: {
      width: 120,
      height: 100,
      fontSize: 24,
      fontWeight: "700",
    },
  },
  latestNews: {
    mainContainer: {
      width: 350,
      height: 500,
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    image: {
      width: 320,
      height: 190,
    },
    subtitle: {
      letterSpacing: 2,
      color: "light-grey",
    },
    title: {
      fontSize: 30,
      fontWeight: "700",
    },
    button: { width: 200, padding: 10, borderWidth: 0.5, borderRadius: 25 },
    buttonText: {
      color: "grey",
      fontWeight: "700",
      textAlign: "center",
    },
  },
  joinDCUniverse: {
    mainContainer: {
      paddingHorizontal: 15,
      // backgroundColor: "blue",
    },
    image: {
      // backgroundColor: "blue",
    },
    subtitle: {
      // backgroundColor: "blue",
    },
    title: {
      // backgroundColor: "blue",
    },
    button: {
      // backgroundColor: "blue",
    },
  },
  theWorldOfBatman: {
    mainContainer: {
      flex: 1,
      margin: 5,
      width: 200,
      height: 220,
    },
    image: {
      width: 200,
      height: 200,
    },
    title: {
      width: 200,
      letterSpacing: 1,
    },
  },
  whoIsWho: {
    mainContainer: {
      height: 450,
    },
    image: {
      width: 200,
      height: 400,
    },
    title: {
      fontWeight: '600',
      textAlign: 'center'
    }
  },
});
