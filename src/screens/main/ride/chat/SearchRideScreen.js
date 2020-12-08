import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Input} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import Carona from '../../../../component/Carona';



const SearchRideScreen = ({ navigation }) => {
  //Comportamento esperado:
  //Como passageiro, selecionar Origem("Polo") e Destino("Bairros")
  //Botao Filtrar
  //Ao filtrar, buscar lista com mesma Origem("Polo") e Destino no meio da rota ("Bairro")
  //Ao clicar na Corrida, ir para o Chat com o motorista
  //Se já estiver em alguma corrida (for aceito no Chat), ir para tela de Track da Viagem(RideScreen)

  

  return (
    <View style={styles.base}>
      <View style={styles.formLine}>
        <Text style={styles.label}>Local</Text>
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Estácio Campus I', value: '1' },
              { label: 'Estácio Campus II', value: '2' },
              { label: 'Estácio Campus III', value: '3' },
            ]}
        />
      </View>
      <View style={styles.formLine}>
        <Text style={styles.label}>Destino</Text>
        <Input />
      </View>
      <View style={styles.list}>
        <View style={styles.titleList}>
          <Text style={styles.textList}>Caronas disponíveis</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Carona/>
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
  formLine:{
    marginBottom: 24,
    padding: 12,
    width: '80%',
  },
  label:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3E475B',
  },
  list:{
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
  }
});

export default SearchRideScreen;
