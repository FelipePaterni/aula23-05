import { Image, StyleSheet, Text, View } from "react-native";

export default function Exerc6() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://placehold.co/250" }} style={styles.capa} />

      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/18.jpg" }}
        style={styles.perfil}
      />
      <Text style={styles.nome}>Carlos Silva</Text>
      <Text style={styles.descricao}>Desenvolvedor Mobile </Text>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Meus Posts</Text>
        <Text style={styles.secaoConteudo}>5 Posts</Text>
      </View>
      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Seguidores</Text>
        <Text style={styles.secaoConteudo}>230 Seguidores</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Seguindo</Text>
        <Text style={styles.secaoConteudo}>180 Seguindo</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  capa: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  perfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
    position: "absolute",
    top: 180,
    left: 20,
    alignItems: "center",
    zIndex: 1,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 20,
  },
  descricao: {
    marginVertical: 20,
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  secao: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  secaoConteudo: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
});
