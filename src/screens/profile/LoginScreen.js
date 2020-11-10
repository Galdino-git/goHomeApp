import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>
        Go
        <Entypo name="home" size={80} color="green" />
      </Text>
      <View>
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input}></TextInput>
        <TouchableOpacity
          onPress={() => navigation.navigate("PasswordRecovery")}
        >
          <Text style={styles.senha}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 80,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 50,
  },
  input: {
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
    fontSize: 40, //tamanho do input?
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 15,
  },
  senha: {
    alignSelf: "flex-end",
    paddingRight: 15,
    fontWeight: "bold",
  },
  viewButton: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 10,
    height: 60,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
  },
});

export default LoginScreen;
