import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

import RNPickerSelect from 'react-native-picker-select';

import { AntDesign } from "@expo/vector-icons";
import { Value } from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";

import Carona from "../../components/Carona";


//Comportamento esperado:
//Como passageiro, selecionar Origem("Polo") e Destino("Bairros")
//Botao Filtrar
//Ao filtrar, buscar lista com mesma Origem("Polo") e Destino no meio da rota ("Bairro")
//Ao clicar na Corrida, ir para o Chat com o motorista
//Se já estiver em alguma corrida (for aceito no Chat), ir para tela de Track da Viagem(RideScreen)


export default ({history}) =>(
  <View style={styles.base}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => history.push('/MenuScreen')}>
        <AntDesign name="left" size={24} color="black" style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.title}>Buscar Carona</Text>
    </View>
    <View style={styles.body}>
      <View style={styles.formLine}>
        <Text style={styles.label}>Local</Text>
      <View style={styles.Input}>
        <RNPickerSelect 
          onValueChange={(value) => console.log(value)}
          
          items={[
            {label: 'Estácio Niterói 1', value: '1'},
            {label: 'Estácio Niterói 2', value: '2'},
            {label: 'Estácio Niterói 3', value: '3'}
          ]}
        />
      </View>
      </View>
      <View style={styles.formLine}>
          <Text style={styles.label}>Destino</Text>
          <TextInput style={styles.Input} />
      </View>
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Caronas disponíveis</Text>
      </View>
      <View style={styles.list}>
          <TouchableOpacity onPress={() => history.push('/ChatScreen')}><Carona /></TouchableOpacity>
          <TouchableOpacity onPress={() => history.push('/ChatScreen')}><Carona /></TouchableOpacity>
          <TouchableOpacity onPress={() => history.push('/ChatScreen')}><Carona /></TouchableOpacity>
        

      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  base:{},
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
  body:{
    paddingTop: 12,
    alignItems: 'center',
  },
  formLine:{
    marginBottom: 36,
    width: 300,
  },
  label:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  Input:{
    height: 48,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 12,
  },
  listHeader:{
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingTop: 12,
    paddingBottom: 12,
  },
  listTitle:{
    paddingLeft: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  list:{
    width: '100%',
  }


});

