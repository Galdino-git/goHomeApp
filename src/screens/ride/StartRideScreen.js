import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StartRideScreen = ({ navigation }) => {
  //Comportamento esperado:
  //Como motorista, iniciar nova corrida configurando local inicial("Polo") e final(Casa), para desenhar a rota
  //Provavel maior parte do código, definindo a rota e "pontos de passagem"
  //Config 1:
  ////Algo como criar uma rota e mapear os "Bairros"
  ////Com essa lista, quando um passageiro escolher o destino dele, se for um dos "Bairros" da lista do motorista com o mesmo local de partida
  ////A "Carona" aparece para o passageiro, na lista de "Caronas"
  //Config 2:
  ////Mapear toda a rota normalmente
  ////O passageiro escolhe um bairro Destino
  ////Esse bairro tem que estar na rota (duvida do como fazer) e, se estiver, aparece na lista de "Caronas"

  return (
    <View>
      <Text>Start Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default StartRideScreen;
