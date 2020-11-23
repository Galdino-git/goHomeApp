import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

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

export default ({history}) => (
  <View>
     <View style={styles.header}>
      <TouchableOpacity onPress={() => history.push('/SearchRideScreen')}>
        <AntDesign name="left" size={24} color="black" style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.title}>Mensagens</Text>
    </View>
    <View style={styles.chatBody}></View>
    <Text> Tela de corrida</Text>
  </View>

);


const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 48,
  },
  back:{
    marginLeft: 12
  },
  title:{
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 100,
  },
});

