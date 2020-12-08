import React, { useState, useEffect, useRef, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { NavigationEvents } from "react-navigation";
import { Context as LoginContext } from "../../context/LoginContext";

const SignInScreen = ({ navigation }) => {
  const inputElementRef = useRef(null);

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: { fontFamily: "" },
    });
  });

  const { state, signin, clearErrorMessage } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
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
        <TouchableOpacity
          onPress={() => navigation.navigate("PasswordRecovery")}
        >
          <Text style={styles.senha}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <View style={styles.btnLine}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => signin({ email, password })}
        >
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.btnText}>Cadastrar</Text>
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
  btnLine: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    paddingTop: 12,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "green",
    alignItems: "center",
    width: 120,
    borderRadius: 50,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
  errorMessage: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginVertical: 10,
    color: "red",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default SignInScreen;
