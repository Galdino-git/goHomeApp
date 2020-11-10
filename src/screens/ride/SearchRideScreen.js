import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchRideScreen = ({ navigation }) => {
  //Comportamento esperado:
  //Como passageiro, selecionar Origem("Polo") e Destino("Bairros")
  //Botao Filtrar
  //Ao filtrar, buscar lista com mesma Origem("Polo") e Destino no meio da rota ("Bairro")
  //Ao clicar na Corrida, ir para o Chat com o motorista
  //Se já estiver em alguma corrida (for aceito no Chat), ir para tela de Track da Viagem(RideScreen)

  return (
    <View>
      <Text>SearchRide Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchRideScreen;
