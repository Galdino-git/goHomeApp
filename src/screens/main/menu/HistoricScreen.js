import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HistoricScreen = () => {
  //Comportamento esperado:
  //Tela para checar o historico de viagens
  //Exibir corretamente se a viagem foi feita como motorista ou passageiro

  return (
    <View styles={styles.base}>
      <View style={styles.list}>
        <View style={styles.titleList}>
          <Text style={styles.textList}>Suas Caronas</Text>
        </View>
        <TouchableOpacity style={styles.itemLine}>
          <Text style={styles.name}>Nome</Text>
          <Text style={styles.Type}>passageiro</Text>
          <Text style={styles.date}>DD/MM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemLine}>
          <Text style={styles.name}>Nome</Text>
          <Text style={styles.Type}>passageiro</Text>
          <Text style={styles.date}>DD/MM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemLine}>
          <Text style={styles.name}>Nome</Text>
          <Text style={styles.Type}>passageiro</Text>
          <Text style={styles.date}>DD/MM</Text>
        </TouchableOpacity>
        

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 24,
    backgroundColor: '#fff',
  },
  list:{
    backgroundColor: '#fff',
    marginTop: 48,
    width: '100%',
  },
  titleList:{
    backgroundColor: 'green',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  textList:{
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  itemLine:{
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#333',
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name:{
    fontSize: 16,
    fontWeight: '700',
  },
  Type:{
    fontSize: 14,
    fontWeight: '500'
  },
  date:{
    fontSize: 14,
    fontWeight: '500'
  }
});

export default HistoricScreen;
