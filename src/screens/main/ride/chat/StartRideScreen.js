import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import MultiSelect from "react-native-multiple-select";
import { SafeAreaView } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
import { Context as RouteContext } from "../../../../context/RouteContext";

const StartRideScreen = ({ navigation }) => {
  const { state, sendRoute, startRide } = useContext(RouteContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const [multiselect, setMultiselect] = useState(null);
  const [refreshScreen, setRefreshScreen] = useState(false);
  const [campus, setCampus] = useState("");

  const items = [
    { name: "Bairro de Fátima", id: "1" },
    { name: "Boa Viagem", id: "2" },
    { name: "Cachoeiras", id: "3" },
    { name: "Centro", id: "4" },
    { name: "Charitas", id: "5" },
    { name: "Gragoatá", id: "6" },
    { name: "Icaraí", id: "7" },
    { name: "Ingá", id: "8" },
    { name: "Jurujuba", id: "9" },
    { name: "Morro do Estado", id: "10" },
    { name: "Pé Pequeno", id: "11" },
    { name: "Ponta d'Areia", id: "12" },
    { name: "Santa Rosa", id: "13" },
    { name: "São Domingos", id: "14" },
    { name: "São Francisco", id: "15" },
    { name: "Viradouro", id: "16" },
    { name: "Vital Brazil", id: "17" },
    { name: "Baldeador", id: "18" },
    { name: "Barreto", id: "19" },
    { name: "Caramujo", id: "20" },
  ];

  useEffect(() => {
    if (refreshScreen) {
      setRefreshScreen(false);
    }
  }, [refreshScreen]);

  const selecionaValores = (value) => {
    setSelectedItems(value);
    setRefreshScreen(true);
  };

  const enviaRota = () => {
    sendRoute(selectedItems, campus);
  };

  useEffect(() => {
    if (state.gotInside) {
    }
  }, [state.gotInside]);

  return (
    <SafeAreaView>
      <ScrollView horizontal={false}>
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
            <View>
              <MultiSelect
                hideTags
                items={items}
                uniqueKey="id"
                ref={(component) => {
                  setMultiselect(component);
                }}
                onSelectedItemsChange={(value) => selecionaValores(value)}
                selectedItems={selectedItems}
                selectText="Escolha os bairros da sua rota..."
                searchInputPlaceholderText="Pesquisar bairros..."
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: "#CCC" }}
                submitButtonColor="green"
                submitButtonText="Selecionar"
              />
              <View>
                {multiselect ? multiselect.getSelectedItemsExt() : null}
              </View>
            </View>
          </View>
          <View style={styles.btnLine}>
            <TouchableOpacity style={styles.btn} onPress={() => enviaRota()}>
              <Text style={styles.btnText}>Disponibilizar rota</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Ride");
                startRide();
              }}
            >
              <Text style={styles.btnText}>Iniciar Viagem</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <View style={styles.titleList}>
              <Text style={styles.textList}>Passageiros</Text>
              <Text style={styles.vagaCount}>1 Vaga(s)</Text>
            </View>
            {/* <TouchableOpacity>
              <OfercerCarona />
            </TouchableOpacity>
            <TouchableOpacity>
              <OfercerCarona />
            </TouchableOpacity>
            <TouchableOpacity>
              <OfercerCarona />
            </TouchableOpacity> */}
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
  btnLine: {
    paddingTop: 24,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    paddingTop: 12,
    paddingBottom: 12,
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

export default StartRideScreen;
