import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="exerc1" options={{ title: "Exercício 1" }} />
      <Stack.Screen name="exerc2" options={{ title: "Exercício 2" }} />
      <Stack.Screen name="exerc3" options={{ title: "Exercício 3" }} />
      <Stack.Screen name="exerc4" options={{ title: "Exercício 4" }} />
      <Stack.Screen name="exerc5" options={{ title: "Exercício 5" }} />
      <Stack.Screen name="exerc6" options={{ title: "Exercício 6" }} />
    </Stack>
  );
}
