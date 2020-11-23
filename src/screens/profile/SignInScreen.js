import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
 


export default ({history}) => (
  

  <View style={styles.base}>
    <Text style={styles.title}>Cadastro</Text>
    <View style={styles.RadiusButtom}>

    </View>
    <View style={styles.picture}>

    </View>
    <View style={styles.formLine}>
      <Text style={styles.label}>E-mail</Text>
      <TextInput style={styles.Input} />
    </View>
    <View style={styles.formLine}>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.Input} />
    </View>
    <View style={styles.formLineAlt}>
      <View style={styles.column}>
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.Input} />
      </View>
      <View style={styles.wSpace}></View>
      <View style={styles.column}>
        <Text style={styles.label}>Confi. Senha</Text>
        <TextInput style={styles.Input} />
      </View>
    </View>
    <View style={styles.formLine}>
      <Text style={styles.label}>CPF</Text>
      <TextInput style={styles.Input} />
    </View>
    <View style={styles.formLine}>
      <Text style={styles.label}>CNH</Text>
      <TextInput style={styles.Input} />
    </View>
    <View style={styles.lineButton}>
      <TouchableOpacity style={styles.buttonClose} onPress={() => history.push("/")}>
        <Text style={styles.textButtonClose}>Cancelar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNext} onPress={() => history.push("/")}>
        <Text style={styles.textButtonNext}>Próximo</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  base:{
    padding: 12,
  },
  title:{
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  RadiusButtom:{},
  picture:{},
  formLine:{
    marginBottom: 16,
  },
  formLineAlt:{
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wSpace:{
    width: 4
  },
  column:{
    flex: 2,
    width: 50
  },
  label:{
    fontSize:14,
    fontWeight: '700',
    marginBottom: 4
  },
  Input:{
    borderWidth: 1,
    borderColor: '#000',
    paddingLeft: 6,
    height: 50,
    borderRadius: 12
  },
  lineButton:{
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonClose:{
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 24
  },
  buttonNext:{
    borderWidth: 3,
    borderColor: 'green',
    borderRadius: 24
  },
  textButtonClose:{
    padding: 12,
    fontSize: 14,
    fontWeight: 'bold',
  },
  textButtonNext:{
    padding: 12,
    fontSize: 14,
    fontWeight: 'bold',
  }


  



});

//Comportamento esperado:
//Tela de cadastro de usuário
//Possivel radio button para escolha de cadastro entre motorista e passageiro
//Se motorista for escolhido, novos campos obrigatorios aparecem na tela (validação de tela apenas), SE o botao estiver selecionado
//Se passageiro for escolhido, a tela permanece a mesma (mantendo os campos escondidos não obrigatorios)
//Se o botão trocar de valor, a mudança de tela e validação de dados deve se manter fiel à opção escolhida
