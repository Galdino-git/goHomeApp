import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Context as LoginContext } from "../../../context/LoginContext";

const MenuScreen = ({ navigation }) => {
  const { state } = useContext(LoginContext);
  //Side com nome foto avaliação

  const profile = state.profile;

  return (
    <View style={styles.base}>
      <Text style={styles.title}>
        Go
        <Entypo name="home" size={80} color="green" />
      </Text>
      <View style={styles.btnLine}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("SearchRide")}
        >
          <Text style={styles.btnText}>Buscar carona</Text>
        </TouchableOpacity>
        {profile && profile.is_Driver ? (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("StartRide")}
          >
            <Text style={styles.btnText}>Oferecer carona</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 80,
    alignSelf: "center",
    marginBottom: 80,
  },
  base: {
    flex: 1,
    paddingTop: 24,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  btnLine: {
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
