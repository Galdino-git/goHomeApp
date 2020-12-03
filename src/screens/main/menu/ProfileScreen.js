import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

const ProfileScreen = () => {
  //Comportamento esperado:
  //Informar os dados cadastrais e ter um botao para editar cada campo
  //Poder alterar a senha
  //Salvar ou Cancelar ação

  return (
    <View style={styles.base}>
      <View style={styles.profilePictureLine}>
        <FontAwesome5 name="user-circle" size={200} color="black" />
      </View>
      <View style={styles.dataComponent}>
        <Text style={styles.dataTitle}>Dados</Text>
        <Text style={styles.name}>Nome do usuário</Text>
        <Text style={styles.mail}>mail@exemplo.com.br</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base:{
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  profilePictureLine:{
    alignItems: "center",
    marginBottom: 12,
  },
  dataComponent:{

  },
  dataTitle:{
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
  },
  name:{
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  mail:{
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  }

});

export default ProfileScreen;
