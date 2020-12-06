import React, { useState, useContext, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox, Input } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import { FontAwesome5 } from "@expo/vector-icons";
import { Context as LoginContext } from "../../context/LoginContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

const SignUpScreen = ({ navigation }) => {
  const { state, signup, secretQuestions } = useContext(LoginContext);
  const [showBirthdate, setShowBirthdate] = useState(false);
  const [questions, setQuestions] = useState([]);

  const inputElementRef = useRef(null);

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: { fontFamily: "" },
    });
  });

  useEffect(() => {
    secretQuestions();
    var questions = state.questions.data;
    setQuestions(questions);
  }, []);

  //#region Profile
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [cpf, setCpf] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [telephone, setTelephone] = useState(0);
  const [is_Driver, setIs_Driver] = useState(false);
  const [cnh, setCnh] = useState(0);

  //#endregion

  //#region Car (id_perfil necessário)
  const [renavam, setRenavam] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  //#endregion

  //#region User (id_perfil necessário)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPasswword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [questionId, setQuestionId] = useState(0);
  const [secretAnswer, setSecretAnswer] = useState("");

  //#endregion

  const passwordValidate = (password, confirmPassword) => {
    setConfirmPassword(confirmPassword);
    if (password != confirmPassword) {
      alert("Senhas não batem");
    } else {
      setPassword(password);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowBirthdate(Platform.OS === "ios");
    setBirthdate(currentDate);
  };

  const getDateToString = (date) => {
    var days = date.getDate().toString();
    if (days.length === 1) {
      days = "0" + days;
    }
    const month = date.getMonth() + 1;
    var monthStr = month.toString();
    if (monthStr.length === 1) {
      monthStr = "0" + month.toString();
    }
    const year = date.getFullYear().toString();

    return days + "/" + monthStr + "/" + year;
  };

  return (
    <SafeAreaView style={styles.base}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.profilePictureLine}>
          <FontAwesome5 name="user-circle" size={200} color="black" />
        </View>
        <View style={styles.radioButtonLine}>
          <CheckBox
            title="Passageiro"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={!is_Driver}
            onPress={() => setIs_Driver(false)}
          />
          <CheckBox
            title="Motorista"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={is_Driver}
            onPress={() => setIs_Driver(true)}
          />
        </View>

        <View style={styles.form}>
          <Input
            label="Nome"
            autoCorrect={false}
            autoCompleteType="off"
            value={name}
            onTextInput={setName}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Input
                label="CPF"
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="off"
                keyboardType="numeric"
                maxLength={11}
                value={cpf == 0 ? "" : cpf.toString()}
                onTextInput={setCpf}
              />
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => setShowBirthdate(true)}>
                <Input
                  label="Data de Nascimento"
                  disabled={true}
                  value={getDateToString(birthdate)}
                ></Input>
              </TouchableOpacity>
            </View>
            {showBirthdate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={birthdate}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) =>
                  onChange(event, selectedDate)
                }
              />
            )}
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 1 }}></View>
          </View>
          <Input
            label="Telefone"
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="off"
            keyboardType="phone-pad"
            maxLength={11}
            value={telephone == 0 ? "" : telephone.toString()}
            onTextInput={setTelephone}
          />
          {!is_Driver ? null : (
            <View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Input
                    label="CNH"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="off"
                    keyboardType="numeric"
                    value={cnh == 0 ? "" : cnh.toString()}
                    onTextInput={setCnh}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Input
                    label="Renavam / CRLV"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="off"
                    keyboardType="numeric"
                    maxLength={11}
                    value={renavam == 0 ? "" : renavam.toString()}
                    onTextInput={setRenavam}
                  />
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Input
                    label="Modelo do Veículo"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="off"
                    value={model}
                    onTextInput={setModel}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Input
                    label="Cor do Veículo"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="off"
                    value={color}
                    onTextInput={setColor}
                  />
                </View>
              </View>

              <Input
                label="Placa do Veículo"
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="off"
                maxLength={7}
                value={licensePlate}
                onTextInput={setLicensePlate}
              />
            </View>
          )}
          <Input
            label="E-mail para login"
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="off"
            keyboardType="email-address"
            value={email}
            onTextInput={setEmail}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Input
                label="Senha"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="off"
                ref={inputElementRef}
                value={newPassword}
                onTextInput={setNewPasswword}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Input
                label="Confirmar senha"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="off"
                ref={inputElementRef}
                value={confirmPassword}
                onTextInput={(text) => passwordValidate(newPassword, text)}
              />
            </View>
          </View>

          <Text style={styles.label}>Pergunta para recuperação de senha </Text>
          <View style={styles.dropdown}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              placeholder={{ label: "Selecione uma pergunta", value: "" }}
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" },
              ]}
            />
          </View>
          <Input
            label="Resposta Secreta"
            value={secretAnswer}
            onTextInput={setSecretAnswer}
          />
        </View>
        <View style={styles.btnLine}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              signup({
                name,
                birthdate,
                cpf,
                photo,
                telephone,
                is_Driver,
                cnh,
                renavam,
                model,
                color,
                licensePlate,
                email,
                password,
                questionId,
                secretAnswer,
              })
            }
          >
            <Text style={styles.btnText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={styles.btnText}
              onPress={() => navigation.navigate("SignIn")}
            >
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
    paddingLeft: 12,
    paddingRight: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 36,
  },
  Input: {
    paddingLeft: 12,
    marginBottom: 36,
  },
  radioButtonLine: {
    flexDirection: "row",
    justifyContent: "center",
  },
  profilePictureLine: {
    marginTop: 48,
    alignItems: "center",
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
    borderWidth: 1,
    borderColor: "green",
    alignItems: "center",
    width: 120,
    borderRadius: 50,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#rgb(134, 147, 158)",
    paddingLeft: 12,
  },
  dropdown: {
    paddingLeft: 3,
  },
  datepicker: {
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
  },
});

export default SignUpScreen;
