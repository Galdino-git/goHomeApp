import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import {} from 'react-native-multiple-select'
import RNPickerSelect, {defaultStyles} from "react-native-picker-select";
import Carona from "../../../../component/Carona";

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
            { label: "Estácio Campus I", value: "1" },
            { label: "Estácio Campus II", value: "2" },
            { label: "Estácio Campus III", value: "3" },
          ]}
        />
      </View>
      <View style={styles.formLine}>
        <Text style={styles.label}>Destino</Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          style={styles.pickerselect}
          items={[
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
          ]}
        />
      </View>
      <View style={styles.list}>
        <View style={styles.titleList}>
          <Text style={styles.textList}>Caronas disponíveis</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Carona name='gustavo Moraes' destino='Itapu' vagas='2' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
    backgroundColor: "#fff",
  },
  formLine: {
    marginBottom: 24,
    padding: 12,
    width: "80%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3E475B",
  },
  list: {
    width: "100%",
  },
  titleList: {
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
  pickerselect:{
    padding: 24,
  }
});

export default SearchRideScreen;
