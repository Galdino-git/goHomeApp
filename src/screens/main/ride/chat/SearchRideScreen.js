import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";
import { SafeAreaView } from "react-navigation";
import Carona from "../../../../component/Carona";
import { Context as RouteContext } from "../../../../context/RouteContext";

const SearchRideScreen = ({ navigation }) => {
  const { state, getInRide } = useContext(RouteContext);
  const [bairro, setBairro] = useState("");
  const [campus, setCampus] = useState("");
  const [rotas, setRotas] = useState(false);

  const items = [
    { label: "Bairro de Fátima", value: "1", key: "b1" },
    { label: "Boa Viagem", value: "2", key: "b2" },
    { label: "Cachoeiras", value: "3", key: "b3" },
    { label: "Centro", value: "4", key: "b4" },
    { label: "Charitas", value: "5", key: "b5" },
    { label: "Gragoatá", value: "6", key: "b6" },
    { label: "Icaraí", value: "7", key: "b7" },
    { label: "Ingá", value: "8", key: "b8" },
    { label: "Jurujuba", value: "9", key: "b9" },
    { label: "Morro do Estado", value: "10", key: "b10" },
    { label: "Pé Pequeno", value: "11", key: "b11" },
    { label: "Ponta d'Areia", value: "12", key: "b12" },
    { label: "Santa Rosa", value: "13", key: "b13" },
    { label: "São Domingos", value: "14", key: "b14" },
    { label: "São Francisco", value: "15", key: "b15" },
    { label: "Viradouro", value: "16", key: "b16" },
    { label: "Vital Brazil", value: "17", key: "b17" },
    { label: "Baldeador", value: "18", key: "b18" },
    { label: "Barreto", value: "19", key: "b19" },
    { label: "Caramujo", value: "20", key: "b20" },
  ];

  const refreshRoutes = () => {
    if (state.listaBairros && state.campus && bairro && campus) {
      const campusDriver = state.campus;

      if (state.listaBairros.includes(bairro) && campus == campusDriver) {
        setRotas(true);
      }
    }
  };

  useEffect(() => {
    if (state.hasStarted) {
      navigation.navigate("Ride");
    }
  }, [state.hasStarted]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.base}>
          <View style={styles.formLine}>
            <Text style={styles.label}>Local</Text>
            <RNPickerSelect
              itemKey={campus}
              useNativeAndroidPickerStyle={true}
              style={{ inputAndroid: { color: "black" } }}
              onValueChange={(value, index) => setCampus(value)}
              placeholder={{ label: "Selecione um campus", value: "" }}
              items={[
                { label: "Estácio Campus I", value: "1", key: "c1" },
                { label: "Estácio Campus II", value: "2", key: "c2" },
                { label: "Estácio Campus III", value: "3", key: "c3" },
              ]}
            />
          </View>
          <View style={styles.formLine}>
            <Text style={styles.label}>Destino</Text>
            <RNPickerSelect
              itemKey={bairro}
              useNativeAndroidPickerStyle={true}
              style={{ inputAndroid: { color: "black" } }}
              onValueChange={(value, index) => setBairro(value)}
              placeholder={{ label: "Selecione um bairro", value: "" }}
              items={items}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => refreshRoutes()}>
            <Text style={styles.btnText}>Buscar rotas</Text>
          </TouchableOpacity>
          <View style={styles.list}>
            <View style={styles.titleList}>
              <Text style={styles.textList}>Caronas disponíveis</Text>
            </View>
            {rotas ? (
              <TouchableOpacity onPress={() => getInRide()}>
                <Carona name="Gustavo Moraes" destino="Centro" vagas="1" />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  pickerselect: {
    padding: 24,
  },
  btnLine: {
    paddingTop: 24,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "green",
    alignItems: "center",
    width: 160,
    borderRadius: 50,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default SearchRideScreen;
