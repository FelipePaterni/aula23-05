import { View, Text, Image, StyleSheet, FlatList } from "react-native";

// Definindo o tipo para Post
type Post = {
  id: string;
  userName: string;
  userImage: string;
  postImage: string;
  description: string;
};

// Array de Posts com dados de exemplo
const posts: Post[] = [
  {
    id: "1",
    userName: "Ana Souza",
    userImage: "https://randomuser.me/api/portraits/women/10.jpg",
    postImage: "https://www.w3schools.com/w3images/mountains.jpg",
    description: "Curtindo uma trilha nas montanhas!",
  },
  {
    id: "2",
    userName: "João Silva",
    userImage: "https://randomuser.me/api/portraits/men/15.jpg",
    postImage: "https://www.w3schools.com/w3images/bridge.jpg",
    description: "Passeio incrível pela ponte histórica.",
  },
  {
    id: "3",
    userName: "Beatriz Lima",
    userImage: "https://randomuser.me/api/portraits/women/22.jpg",
    postImage: "https://www.w3schools.com/w3images/nature.jpg",
    description: "Relaxando em meio à natureza exuberante.",
  },
];

export default function App() {

  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
 
      <View style={styles.userInfo}>
        <Image source={{ uri: item.userImage }} style={styles.userImage} />
        <Text style={styles.userName}>{item.userName}</Text>
      </View>
      
      
      <Image source={{ uri: item.postImage }} style={styles.postImage} />
      
   
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});