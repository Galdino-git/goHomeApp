import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Input } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { Context as LoginContext } from "../../context/LoginContext";

const SignInScreen = ({ navigation }) => {
  //correção para mudança de fonte quando secureTextEntry for true
  const inputElementRef = useRef(null);
  //

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: { fontFamily: "" },
    });
  });

  const { state, signin } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Go
        <Entypo name="home" size={80} color="green" />
      </Text>
      <View>
        <Input
          leftIcon={{ type: "entypo", name: "mail" }}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
        ></Input>
        <Input
          leftIcon={{ type: "entypo", name: "lock" }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          ref={inputElementRef}
          secureTextEntry
        ></Input>
        <TouchableOpacity onPress={() => navigation.navigate("mainFlow")}>
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
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 80,
    alignSelf: "center",
    marginBottom: 100,
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
    fontSize: 16,
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
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default SignInScreen;
