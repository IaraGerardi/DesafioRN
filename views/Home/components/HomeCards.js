import { View, FlatList} from "react-native";
import Card from "../../GlobalComponents/Card/Card";
import data from '../../data/HomeCards.json';

export default function HomeCards() {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card data={item} type="homeCards" />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
