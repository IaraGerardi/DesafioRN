import { Text, View, Image, FlatList } from "react-native";

export default function Footer() {
  const sections = [
    "Privacy policy",
    "Terms",
    "AD Choices",
    "Accesibility",
    "Gestionar preferencias",
  ];

  const footerItem = ({ name }) => {
    return <Text onClick={() => console.log(name)}>{name}</Text>;
  };

  return (
    <View>
      {/* <Image source={{ uri: 'imageLink' }} /> */}
      <FlatList
        data={sections}
        renderItem={footerItem}
        keyExtractor={(item) => item}
      />
      <Text>© & ™ DC. ALL RIGHTS RESERVED</Text>
    </View>
  );
}
