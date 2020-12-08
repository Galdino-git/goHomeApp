import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Map from "../../../component/Map";


const MenuScreen = ({ navigation }) => {
  //Comportamento esperado:
  //Tela "principal" para Iniciar uma Corrida(se Motorista) e/ou Buscar uma Corrida(motorista/passageiro)
  //Side menu com foto, nome, avaliação botao para acessar Historico, botao para acessar Perfil e botão para deslogar

  const isMotorista = true;

  return (
<<<<<<< HEAD
    <View style={styles.base}>
      <Map />
      <View style={styles.btnLine}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("SearchRide")}
        >
          <Text style={styles.btnText}>Buscar carona</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("StartRide")}
        >
          <Text style={styles.btnText}>Oferecer carona</Text>
        </TouchableOpacity>
      </View>
    </View>
=======
     <View style={styles.base}>
       <Map />
       <View style={styles.btnLine}>
          
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SearchRide")}>
            <Text style={styles.btnText}>Buscar carona</Text>
          </TouchableOpacity>
        
          {isMotorista ? 
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("StartRide")}>
              <Text style={styles.btnText}>Oferecer carona</Text>
            </TouchableOpacity> 
            :
            null
          }
       </View>
     </View>
>>>>>>> master
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    paddingTop: 24,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  btnLine: {
    paddingTop: 48,
    alignItems: "center",
  },
  btn: {
    width: 220,
    height: 60,
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: "center",
    marginBottom: 36,
    borderColor: "green",
  },
  btnText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MenuScreen;
