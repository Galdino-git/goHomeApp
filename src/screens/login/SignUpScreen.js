import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SignUpScreen = ({ navigation }) => {
  //Comportamento esperado:
  //Tela de cadastro de usuário
  //Possivel radio button para escolha de cadastro entre motorista e passageiro
  //Se motorista for escolhido, novos campos obrigatorios aparecem na tela (validação de tela apenas), SE o botao estiver selecionado
  //Se passageiro for escolhido, a tela permanece a mesma (mantendo os campos escondidos não obrigatorios)
  //Se o botão trocar de valor, a mudança de tela e validação de dados deve se manter fiel à opção escolhida

  return (
    <View>
      <Text>SignUp Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
