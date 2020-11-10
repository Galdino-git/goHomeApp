import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RideScreen = ({ navigation }) => {
  //Comportamento esperado:
  //Track da viagem (passageiros + motorista) apenas
  //Enquanto não for iniciada pelo motorista, passageiros podem "desistir da Carona"
  //Enquanto não for iniciada pelo motorista, motorista pode "remover da Carona" (?)
  //Ao ser iniciada, a tela muda para acompanhar a Carona
  //Acompanha quando alguem "finaliza" a viagem dela, removendo da listagem
  //O motorista pode finalizar a viagem, "cancelando" a Carona de todos. É necessário justificativa e todos passageiros são notificados (?)
  //Um passageiro pode finalizar a viagem clicando no botao, saindo da listagem
  //Apos clicar, abrir parte da tela com a avaliação
  //Apos avaliar, retornar a tela de Menu
  return (
    <View>
      <Text>Ride Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RideScreen;
