import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Exerc5() {
  const [email, onChangeEmail] = useState("");
  const [senha, onChangeSenha] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [senhaFocused, setSenhaFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={[styles.input, emailFocused && styles.inputFocused]}
        onChangeText={(email) => onChangeEmail(email)}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
        autoFocus={true}
      />

      <TextInput
        style={[styles.input, senhaFocused && styles.inputFocused]}
        onChangeText={(senha) => onChangeSenha(senha)}
        value={senha}
        placeholder="Senha"
        secureTextEntry={true}
        onFocus={() => setSenhaFocused(true)}
        onBlur={() => setSenhaFocused(false)}
      />
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#024fa3" : "#017AFF",
          },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <Pressable>
        <Text style={styles.link}>Esqueci a senha</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderRadius: 6,
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: "blue",
  },
  button: {
    borderRadius: 6,
    padding: 10,
    width: "80%",
    height: 40,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
    link: {
    marginTop: 15,
    color: "#007AFF",
    fontSize: 14,
  },
});
