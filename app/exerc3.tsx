import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Exerc3() {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#4903ad" : "#6100ED",
          },
          styles.button
        ]}
      >
        <Text style={styles.buttonText}>Clique Aqui!</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 16,
    padding: 16,
    width:150,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  }
});
