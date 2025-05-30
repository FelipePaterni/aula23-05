import { View, Text, StyleSheet, Image } from "react-native";

export default function Exerc1() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/76.jpg" }}
          style={styles.image}
        />
        <Text style={styles.title}>Carlos Silva</Text>
        <Text style={styles.subtitle}>Desenvolvedor Mobile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: 100, height: 100, borderRadius: 100 },
  card: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 16,
    alignItems: "center",
    width:'90%',
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#444444", // cinza mais escuro
  },
  subtitle: {
    fontSize: 18,
    color: "#444444", // cinza mais escuro
    marginTop: 10,
  },
});
