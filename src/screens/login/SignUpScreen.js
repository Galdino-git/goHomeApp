import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox } from 'react-native-elements';

import { FontAwesome5 } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const SignUpScreen = ({ navigation }) => {
  //Comportamento esperado:
  //Tela de cadastro de usuário
  //Possivel radio button para escolha de cadastro entre motorista e passageiro
  //Se motorista for escolhido, novos campos obrigatorios aparecem na tela (validação de tela apenas), SE o botao estiver selecionado
  //Se passageiro for escolhido, a tela permanece a mesma (mantendo os campos escondidos não obrigatorios)
  //Se o botão trocar de valor, a mudança de tela e validação de dados deve se manter fiel à opção escolhida

  
  return (
    <View style={styles.base}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.radioButtonLine}>
        <CheckBox
          title='Passageiro'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={true}
        />
        <CheckBox
          title='Motorista'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={false}
        />
      </View>
      <View style={styles.profilePictureLine}>
        <FontAwesome5 name="user-circle" size={200} color="black" />
      </View>
      <View style={styles.form}> 
      <Input
          placeholder='E-mail'
        />
      <Input
          placeholder='Nome'
        />
      
      <Input
          placeholder='Senha'
          secureTextEntry={true}
          />
      <Input
          placeholder='Confirmar senha'
          secureTextEntry={true}
        />
      <Input
          placeholder='CNH(obrigatório apenas para motorista)'
        />
      </View>
      <View style={styles.btnLine}>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base:{
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingLeft: 12,
    paddingRight: 12,
  },
  title:{
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 36,
  },
  Input:{
    paddingLeft: 12,
    marginBottom: 36,
  },  
  radioButtonLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profilePictureLine:{
    marginTop: 48,
    alignItems: 'center',
  },
  btnLine:{
    paddingTop: 24,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn:{
    paddingTop: 12,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'green',
    alignItems: 'center',
    width: 120,
    borderRadius: 50,
  },
  btnText:{
    fontSize: 16,
    fontWeight: '700',
  }
});

export default SignUpScreen;
