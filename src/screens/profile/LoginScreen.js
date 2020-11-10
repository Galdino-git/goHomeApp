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
        <TextInput style={styles.mail}></TextInput>
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.passwd}></TextInput>
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
    marginTop: 16,
    marginBottom: 24,
  },
  mail: {
    borderColor: "green",
    paddingLeft: 12,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    height: 60,
    fontSize: 16,
    marginBottom: 24,
  },
  passwd: {
    borderColor: "green",
    paddingLeft: 12,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    height: 60,
    fontSize: 16
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
    borderRadius: 45,
    height: 60,
    paddingLeft:12,
    paddingRight:12,
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
