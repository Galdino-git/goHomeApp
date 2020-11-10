import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const PasswordRecoveryScreen = ({ navigation }) => {
  //Comportamento esperado:
  //Tela para recuperação de senha a partir da tela de Login
  //Informar email ou celular para recuperação de senha
  //Enviar link pare recuperação?
  //Nova tela para reconfigurar senha?
  //Radio Button para escolha de CEL ou EMAIL

  return (
    <View>
      <View>
        <View style={{ marginTop: 180 }}></View>
        <Text style={styles.label}>E-mail de recuperação</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Recuperar Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: 180,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
  },
});

export default PasswordRecoveryScreen;
