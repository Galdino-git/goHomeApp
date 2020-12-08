import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import goHomeApi from "../../api/goHomeAPI";
import RNPickerSelect from "react-native-picker-select";
import { NavigationEvents } from "react-navigation";

import { Context as LoginContext } from "../../context/LoginContext";

const PasswordRecoveryScreen = ({ navigation }) => {
  const { state, clearErrorMessage, passwordRecovery } = useContext(
    LoginContext
  );
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestions() {
      await goHomeApi.get("/secretquestion/read").then((response) => {
        var obj = response.data;
        var questionList = [];
        obj.forEach((element) => {
          questionList.push({
            label: element.question,
            value: element._id,
            key: element._id,
          });
        });
        setQuestions(questionList);
      });
    }
    getQuestions();
  }, []);

  const getUser = async (a) => {
    var em = a.email;
    var id = a._id_Secret_Question;
    var sa = a.secret_Answer;

    console.log("Email");
    console.log(em);
    console.log("Pergunta");
    console.log(id);
    console.log("Resposta");
    console.log(sa);

    const user = await goHomeApi.get("/user/recover", { em, id, sa });

    if (user) {
      console.log(user);
    }
  };

  //#region RecoveryInfo
  const [email, setEmail] = useState("");
  const [_id_Secret_Question, set_Id_Secret_Question] = useState(0);
  const [secret_Answer, setSecret_Answer] = useState("");

  if (state.errorMessage) {
    console.log(state.errorMessage);
  }

  //#endregion

  return (
    <SafeAreaView>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <View style={{ marginTop: 250 }}>
        <Input
          label="E-mail para recuperação"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.dropdown}>
          <RNPickerSelect
            itemKey={_id_Secret_Question}
            useNativeAndroidPickerStyle={true}
            style={{ inputAndroid: { color: "black" } }}
            onValueChange={(value, index) => set_Id_Secret_Question(value)}
            placeholder={{ label: "Selecione uma pergunta", value: "" }}
            items={questions}
          />
        </View>
        <Input
          label="Resposta Secreta"
          value={secret_Answer}
          onChangeText={setSecret_Answer}
        />
      </View>
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <View style={styles.btnLine}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.btnText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            passwordRecovery({
              email,
              _id_Secret_Question,
              secret_Answer,
            });
          }}
        >
          <Text style={styles.btnText}>Recuperar Senha</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

PasswordRecoveryScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 15,
  },
  viewButton: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btnLine: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    paddingTop: 12,
    paddingBottom: 12,
    borderWidth: 2,
    borderColor: "green",
    alignItems: "center",
    borderRadius: 50,
    width: 150,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700",
    paddingHorizontal: 10,
  },
  dropdown: {
    paddingLeft: 3,
    marginBottom: 25,
  },
  errorMessage: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginVertical: 10,
    color: "red",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default PasswordRecoveryScreen;
