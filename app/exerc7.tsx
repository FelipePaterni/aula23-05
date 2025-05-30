import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ItemProps = {
  id: string;
  nome: string;
  icone: keyof typeof Ionicons.glyphMap;
};

const DATA: ItemProps[]= [
  { id: "1", nome: "Mensagens", icone: "chatbubble-outline" },
  { id: "2", nome: "Câmera", icone: "camera-outline" },
  { id: "3", nome: "Galeria", icone: "images-outline" },
  { id: "4", nome: "Música", icone: "musical-notes-outline" },
  { id: "5", nome: "Navegador", icone: "globe-outline" },
  { id: "6", nome: "Configurações", icone: "settings-outline" },
];

const Item = ({ nome, icone, id }: ItemProps) => (
  <TouchableOpacity style={styles.appContainer}>
    <View style={styles.iconeContainer}>
      <Ionicons name={icone} size={40} color="white" />
    </View>
    <Text style={styles.texto}>{nome}</Text>
  </TouchableOpacity>
);

export default function Exerc6() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <Item id={item.id} nome={item.nome} icone={item.icone} />}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 40,
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  appContainer: {
    alignItems: "center",
    margin: 15,
  },
  iconeContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#4CAF50", // Cor do fundo do ícone
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
});
