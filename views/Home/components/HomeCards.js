import { View } from "react-native";
import data from '../../../data/HomeCards.json';
import Card from "../../GlobalComponents/Card/Card";

export default function HomeCards() {
  return (
    <View>
      {data.map(item=><Card key={`${item.id}`} data={item} type="homeCards" />)}
    </View>
  );
}
