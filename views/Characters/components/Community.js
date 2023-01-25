import { View, Text, StyleSheet } from "react-native";
import communityNews from "../../../data/CommunityNews.json";

export function Community() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.headerTitle}>COMMUNITY</Text>
        <Text style={styles.headerSubtitle}>SEE ALL</Text>
      </View>
      {communityNews.map((item) => {
        return (
          <View key={item.id} style={styles.newsContainer}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDate}>{item.date}</Text>
            <Text style={styles.newsDescription}>{item.description}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { marginVertical: 50 },
  sectionHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  headerTitle: { color: "#429eff", fontWeight: "700", fontSize: 25 },
  headerSubtitle: { color: "#429eff", fontWeight: "700", fontSize: 20 },
  newsContainer: { margin: 10 },
  newsTitle: { fontWeight: "600", fontSize: 20 },
  newsDate: { fontWeight: "600", color: "grey", fontSize: 15 },
  newsDescription: { fontWeight: "400"},
});
