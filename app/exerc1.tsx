import { View, Text, StyleSheet } from "react-native";

export default function Exerc1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Primeiro App Expo</Text>
      <Text style={styles.subtitle}>Construindo interfaces no React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB", // Azul claro
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 18,
    color: "#f0f0f0",
    marginTop: 10,
  },
});