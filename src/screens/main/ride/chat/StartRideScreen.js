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
    { label: "Bairro de Fátima", value: "1" },
    { label: "Boa Viagem", value: "2" },
    { label: "Cachoeiras", value: "3" },
    { label: "Centro", value: "4" },
    { label: "Charitas", value: "5" },
    { label: "Gragoatá", value: "6" },
    { label: "Icaraí", value: "7" },
    { label: "Ingá", value: "8" },
    { label: "Jurujuba", value: "9" },
    { label: "Morro do Estado", value: "10" },
    { label: "Pé Pequeno", value: "11" },
    { label: "Ponta d'Areia", value: "12" },
    { label: "Santa Rosa", value: "13" },
    { label: "São Domingos", value: "14" },
    { label: "São Francisco", value: "15" },
    { label: "Viradouro", value: "16" },
    { label: "Vital Brazil", value: "17" },
    { label: "Baldeador", value: "18" },
    { label: "Barreto", value: "19" },
    { label: "Caramujo", value: "20" },
    { label: "Cubango", value: "21" },
    { label: "Engenhoca", value: "22" },
    { label: "Fonseca", value: "23" },
    { label: "Ilha da Conceição", value: "24" },
    { label: "Santa Bárbara", value: "25" },
    { label: "Santana", value: "26" },
    { label: "São Lourenço", value: "27" },
    { label: "Tenente Jardim", value: "28" },
    { label: "Viçoso Jardim", value: "29" },
    { label: "Cafubá", value: "30" },
    { label: "Camboinhas", value: "31" },
    { label: "Engenho do Mato", value: "32" },
    { label: "Itacoatiara", value: "33" },
    { label: "Itaipu", value: "34" },
    { label: "Jacaré", value: "35" },
    { label: "Jardim Imbuí", value: "36" },
    { label: "Maravista", value: "37" },
    { label: "Piratininga", value: "38" },
    { label: "Santo Antônio", value: "39" },
    { label: "Serra Grande", value: "40" },
    { label: "Badu", value: "41" },
    { label: "Cantagalo", value: "42" },
    { label: "Ititioca", value: "43" },
    { label: "Largo da Batalha", value: "44" },
    { label: "Maceió", value: "45" },
    { label: "Maria Paula", value: "46" },
    { label: "Matapaca", value: "47" },
    { label: "Sapê", value: "48" },
    { label: "Vila Progresso", value: "49" },
    { label: "Muriqui", value: "50" },
    { label: "Rio do Ouro", value: "51" },
    { label: "Várzea das Moças", value: "52" },
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
