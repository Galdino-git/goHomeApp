import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

import RNPickerSelect from 'react-native-picker-select';

import { AntDesign } from "@expo/vector-icons";
import { Value } from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";

import Corrida from  "../../components/Corrida";

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


  export default ({history}) =>(
    <View style={styles.base}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => history.push('/MenuScreen')}>
          <AntDesign name="left" size={24} color="black" style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Oferecer Carona</Text>
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
        <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.btn} onPress={() => history.push('/RideScreen')}>
              <Text style={styles.btnText}>Iniciar corrida</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>Passageiros</Text>
          <Text style={styles.listTitle}>X vagas disponíveis</Text>
        </View>
        <View style={styles.list}>
            <TouchableOpacity onPress={() => history.push('/ChatScreen')}><Corrida /></TouchableOpacity>
            <TouchableOpacity onPress={() => history.push('/ChatScreen')}><Corrida /></TouchableOpacity>
            <TouchableOpacity onPress={() => history.push('/ChatScreen')}><Corrida /></TouchableOpacity>
          
  
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
    buttonLine:{
      alignItems: 'center',
      marginBottom: 24,
    },
    btn:{
      width: 160,
      height: 48,
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnText:{
      fontSize: 16,
      fontWeight: 'bold',
    },
    listHeader:{
      width: '100%',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#000',
      paddingTop: 12,
      paddingBottom: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    listTitle:{
      paddingLeft: 12,
      paddingRight: 12,
      fontSize: 16,
      fontWeight: 'bold',
    },
    list:{
      width: '100%',
    }
  
  
  });