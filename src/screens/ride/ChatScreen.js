import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableOpacityComponent} from "react-native";


import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 

//Comportamento esperado:
//Chat de comunicação entre motorista e passageiro
//Se motorista, tem o botão de "adicionar" à viagem

export default ({history}) => (
  <View style={styles.base}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => history.push('/SearchRideScreen')}>
        <AntDesign name="left" size={24} color="black" style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.title}>Mensagens</Text>
    </View>
    <View style={styles.chatBody}>

    </View>
    <View style={styles.mensage}>
      <TextInput style={styles.Input} />
      <TouchableOpacity>
        <Entypo name="paper-plane" size={24} color="black" />
      </TouchableOpacity>

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
  chatBody:{
    height: 480,
  },
  mensage:{
    backgroundColor: 'green',
    width: '100%',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Input:{
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '85%',
    marginRight: 12,
    height: 48,
  }
});

