import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const ChatScreen = () => {
  //Comportamento esperado:
  //Chat de comunicação entre motorista e passageiro
  //Se motorista, tem o botão de "adicionar" à viagem

  return (
    <View style={styles.base}>
      <View style={styles.chat}>
        <View style={styles.messageTo}>
          <Text style={styles.messageTextTo}>Olá</Text>
          <Octicons name="check" size={24} color="black" />
        </View>
        <View style={styles.messageTo}>
          <Text style={styles.messageTextTo}>Gostaria de ir para o mesmo destino</Text>
          <Octicons name="check" size={24} color="black" />
        </View>
        <View style={styles.messageFrom}>
          <Text style={styles.messageTextFrom}>Ok, a vaga é sua</Text>
          <Octicons name="check" size={24} color="black" />
        </View>
      </View>
      <View style={styles.sendMensage}>
        <TextInput style={styles.getMensage}></TextInput>
        <TouchableOpacity>
          <Entypo name="paper-plane" size={24} paddingRight={20} color="black" />
        </TouchableOpacity>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  base:{
    flex: 1,
  },
  chat:{
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 36,
  },
  messageTextTo:{
    fontSize: 16,
    fontWeight: '700',
    color: '#666',
    marginBottom: 12,
  },
  messageTextFrom:{
    fontSize: 16,
    fontWeight: '700',
    color: '#666',
    marginBottom: 12,
  },
  messageTo:{
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  messageFrom:{
    flexDirection: 'row-reverse',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  sendMensage:{
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  getMensage:{
    width: 280,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingBottom: 16,
  }

});

export default ChatScreen;
