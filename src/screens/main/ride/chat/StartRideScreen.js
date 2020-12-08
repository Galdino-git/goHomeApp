import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import OfercerCarona from "../../../../component/OferecerCarona";
import Carona from "../../../../component/Carona";
import MultiSelect from "react-native-multiple-select";
import { SafeAreaView } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";

const StartRideScreen = ({ navigation }) => {
  //Comportamento esperado:
  //Como motorista, iniciar nova corrida configurando local inicial("Polo") e final(Casa), para desenhar a rota
  //Provavel maior parte do código, definindo a rota e "pontos de passagem"

  ////Criar uma rota e mapear os "Bairros", gerando uma lista
  ////Com essa lista, quando um passageiro escolher o destino dele, se for um dos "Bairros" da lista do motorista com o mesmo local de partida
  ////A "Carona" aparece para o passageiro, na lista de "Caronas"

  const [selectedItems, setSelectedItems] = useState([]);
  const [multiselect, setMultiselect] = useState(null);

  const items = [
    {
      id: "92iijs7yta",
      name: "Ondo",
    },
    {
      id: "a0s0a8ssbsd",
      name: "Ogun",
    },
    {
      id: "16hbajsabsd",
      name: "Calabar",
    },
    {
      id: "nahs75a5sg",
      name: "Lagos",
    },
    {
      id: "667atsas",
      name: "Maiduguri",
    },
    {
      id: "hsyasajs",
      name: "Anambra",
    },
    {
      id: "djsjudksjd",
      name: "Benue",
    },
    {
      id: "sdhyaysdj",
      name: "Kaduna",
    },
    {
      id: "suudydjsjd",
      name: "Abuja",
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView horizontal={false}>
        <View style={styles.base}>
          <View style={styles.formLine}>
            <Text style={styles.label}>Local</Text>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Estácio Campus I", value: "1" },
                { label: "Estácio Campus II", value: "2" },
                { label: "Estácio Campus III", value: "3" },
              ]}
            />
          </View>
          <View style={styles.formLine}>
            <View>
              <MultiSelect
                hideTags
                items={items}
                uniqueKey="id"
                ref={(component) => {
                  setMultiselect(component);
                }}
                onSelectedItemsChange={setSelectedItems}
                selectedItems={selectedItems}
                selectText="Pick Items"
                searchInputPlaceholderText="Search Items..."
                onChangeInput={(text) => console.log(text)}
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: "#CCC" }}
                submitButtonColor="#CCC"
                submitButtonText="Submit"
              />
              <View>
                {multiselect ? multiselect.getSelectedItemsExt() : null}
              </View>
            </View>
          </View>
          <View style={styles.btnStartLine}>
            <TouchableOpacity
              style={styles.btnStart}
              onPress={() => navigation.navigate("Ride")}
            >
              <Text style={styles.btnStartText}>Começar corrida</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <View style={styles.titleList}>
              <Text style={styles.textList}>Passageiros</Text>
              <Text style={styles.vagaCount}>1 Vaga(s)</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <OfercerCarona />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <OfercerCarona />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <OfercerCarona />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

StartRideScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  formLine: {
    marginBottom: 24,
    padding: 12,
    width: "80%",
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3E475B",
  },
  btnStartLine: {
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center",
    flex: 2,
  },
  btnStart: {
    paddingTop: 12,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "green",
    alignItems: "center",
    width: 160,
    borderRadius: 50,
  },
  btnStartText: {
    fontSize: 16,
    fontWeight: "700",
  },
  list: {
    width: "100%",
    marginTop: 15,
  },
  titleList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  textList: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
  vagaCount: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    marginLeft: 24,
  },
});

export default StartRideScreen;
