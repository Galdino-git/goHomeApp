import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Map from "../../../component/Map";

const RideScreen = ({ navigation }) => {
  //Comportamento esperado:
  //Track da viagem (passageiros + motorista) apenas
  //Enquanto não for iniciada pelo motorista, passageiros podem "desistir da Carona"
  //Enquanto não for iniciada pelo motorista, motorista pode "remover da Carona" (necessário justificativa)
  //Corridas canceladas ou 'removidos pelo motorista' podem ser avaliadas
  //Antes de ser iniciada, o motorista pode cancelar a Carona (necessário justificativa)
  //Ao ser iniciada, a tela muda para acompanhar a Carona
  //Acompanha quando alguem "finaliza" a viagem dela, removendo da listagem
  //O motorista pode finalizar a viagem, "cancelando" a Carona de todos. É necessário justificativa e todos passageiros são notificados (?)
  //Um passageiro pode finalizar a viagem clicando no botao, saindo da listagem
  //Apos clicar, abrir parte da tela com a avaliação
  //Apos avaliar, retornar a tela de Menu
  return (
    <View style={styles.base}>
      <View style={styles.map}>
        <Map />
      </View>
      <View style={styles.btnLine}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Evaluation")}>
          <Text style={styles.btnText}>Finalizar Corrida</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base:{
    flex: 1,
    paddingTop: 14,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#fff',
  },
  map:{
    alignItems: 'center',
  },
  btnLine:{
    alignItems: 'center',
    paddingTop: 14,
  },
  btn:{
    paddingTop: 12,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'green',
    alignItems: 'center',
    width: 160,
    borderRadius: 50
  },
  btnText:{
    fontSize: 16,
    fontWeight: '700'
  }



});

export default RideScreen;
