import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Map from "../../../component/Map";

const RideScreen = ({ navigation }) => {
  return (
    <View style={styles.base}>
      <View style={styles.btnLine}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.btnText}>Finalizar Corrida</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    paddingTop: 14,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  map: {
    alignItems: "center",
  },
  btnLine: {
    alignItems: "center",
    paddingTop: 14,
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

export default RideScreen;
