 import { FlatList, StyleSheet, Text, View } from "react-native";

const DATA = [
  { id: "1", nome: "Notebook Dell XPS 13" },
  { id: "2", nome: "Smartphone Samsung Galaxy S23" },
  { id: "3", nome: "Fones de Ouvido Bluetooth Sony" },
  { id: "4", nome: "Monitor LG UltraWide 29\"" },
  { id: "5", nome: "Teclado Mecânico HyperX" },
  { id: "6", nome: "Mouse Gamer Logitech G502" },
  { id: "7", nome: "Cadeira Gamer ThunderX3" },
  { id: "8", nome: "Smartwatch Apple Watch Series 9" },
  { id: "9", nome: "Tablet iPad Air" },
  { id: "10", nome: "SSD NVMe Kingston 1TB" },
];


type ItemProps = { nome: string };

const Item = ({ nome }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{nome}</Text>
  </View>
);

export default function Exerc4() {
  return (
    <View style={styles.container}>
      

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item nome={item.nome} />}
        keyExtractor={(item) => item.id}
        
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
  padding: 20,
  },
  item: {
    flex: 1,
    backgroundColor: "#017fff",
    padding: 20,
  marginVertical: 8,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});
