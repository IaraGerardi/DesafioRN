import { useState } from "react";
import { Text, View, Image, FlatList, Button } from "react-native";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const sections = [
    { subsections: false, name: "Characters" },
    {
      subsections: [
        "Latest comics",
        "DC Universe Infinite",
        "All Comic Series",
        "Top Storylines",
        "Showcase Collections",
        "Comic Top Locator",
        "Print Subscriptions",
      ],
      name: "Comics",
    },
    {
      subsections: ["DC Movies", "DC Series", "DC on HBO Max"],
      name: "Shop",
    },
    { subsections: false, name: "Games" },
    { subsections: false, name: "News" },
    { subsections: false, name: "Video" },
    {
      subsections: [
        "DC Shop",
        "New Arrivals",
        "Most Popular",
        "Shop Art of The Bat",
        "Shop Batman",
        "Shop Harley Quinn",
      ],
      name: "Shop",
    },
    { subsections: false, name: "Community" },
    { subsections: false, name: "DC NFTs" },
    { subsections: false, name: "DC Fandome" },
    { subsections: false, name: "My DC Origin Story" },
  ];

  const HeaderItem = ({ item }) => {
    {
      item.subsections ? (
        <FlatList
          data={item.subsections}
          renderItem={
            <Text onClick={() => console.log(item.name)}>{item.name}</Text>
          }
          keyExtractor={(item) => item}
        />
      ) : (
        <Text onClick={() => console.log(item.name)}>{item.name}</Text>
      );
    }
  };

  return (
    <View>
      <View>
        <Image source={{ uri: "imageLink" }} />
        {/* icon */}
        {/* icon */}
      </View>
      {openMenu && (
        <>
          <FlatList
            data={sections}
            renderItem={HeaderItem}
            keyExtractor={(item) => item}
          />
          <View>
            <Button title="Sing Up" />
            <Button title="Log In" />
          </View>
        </>
      )}
    </View>
  );
}
