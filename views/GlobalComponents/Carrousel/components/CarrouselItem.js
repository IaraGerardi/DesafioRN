import { Button, Image, Text, View } from "react-native";

export default function CarrouselItem({ title, styles, subtitle, imageLink, buttonText }) {
    return (
      <View styles={styles.mainContainer}>
        <View styles={styles.subContainer}>
          <Text styles={styles.title}>{}</Text>
          <Button styles={styles.button} title={'buttonText'}/>
        </View>
        <Image styles={styles.image} source={{ uri: imageLink }}/>
      </View>
    );
  }