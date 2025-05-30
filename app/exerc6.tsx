import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

export default function Exerc6() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explorando o Universo</Text>

      <View style={styles.card}>
        <Text style={styles.text}> O universo é vasto e misterioso, repleto de galáxias, estrelas e planetas ainda desconhecidos.</Text>
        <Image
          source={{
            uri: "https://placehold.co/300",
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>  Cientistas estudam o espaço há séculos, utilizando telescópios e sondas espaciais.</Text>
        <Image
          source={{
            uri: "https://placehold.co/300",
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Explorando o Universo</Text>
        <Image
          source={{
            uri: "https://placehold.co/300",
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>Explorando o Universo</Text>
        <Image
          source={{
            uri: "https://placehold.co/300",
          }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  text: { fontSize: 16, marginBottom: 10, color: "#555" },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  card: {
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
});
