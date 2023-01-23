import { StyleSheet } from "react-native";
import { View, Text, Button, Image } from "react-native";

export default function Card({ data, type }) {
  const { title, subtitle, paragraph, imageLink, buttonText } = data;
  const style = styles[type];
  return (
    <View style={style.mainContainer}>
      <Image style={style.image} source={{ uri: imageLink }} />
      {subtitle && <Text style={style.subtitle}>{subtitle}</Text>}
      <Text style={style.title}>{title}</Text>
      {paragraph && <Text style={style.paragraph}>{paragraph}</Text>}
      {buttonText && <Button style={style.button} title={"buttonText"} />}
    </View>
  ); 
}

const styles = StyleSheet.create({
  newReleases: {
    mainContainer: {
      flex: 1,
      height: '50%',
      flexDirection: "column",
      justifyContent: "center",
      // backgroundColor: "blue",
      margin: 5,
    },
    image: {
      width: '100%',
      height: '100%',
      // backgroundColor: "red",
    },
    subtitle: {
      // backgroundColor: "yellow",
    },
    title: {
      // backgroundColor: "pink",
    },
    button: {
      // backgroundColor: "blue",
    },
  },
  latestContent: {
    mainContainer: {
      flex:1,
      height: 300,
      width: 200,
      flexDirection: "column",
      justifyContent: "center",
      // backgroundColor: "blue",
    },
    image: {
      width: 200,
      height: '30%',
      // backgroundColor: "blue",
    },
    subtitle: {
      width: '70%',
      // backgroundColor: "blue",
    },
    title: {
      width: '70%',
      // backgroundColor: "blue",
    },
    button: {
      // backgroundColor: "blue",
    },
  },
  latestNews: {
    mainContainer: {
      // backgroundColor: "blue",
    },
    image: {
      width: 350,
      height: '50%',
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
  whoIsWho: {
    mainContainer: {
      height: 450,
      // backgroundColor: "blue",
    },
    image: {
      width: 200,
      height: 400,
      // backgroundColor: "blue",
    },
    subtitle: {
      // backgroundColor: "blue",
    },
    title: {
      // backgroundColor: "red",
    },
    button: {
      // backgroundColor: "blue",
    },
  },
});
