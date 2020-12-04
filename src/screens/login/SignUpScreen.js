import React, { useState, useContext, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox, Input } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import { FontAwesome5 } from "@expo/vector-icons";
import { Context as LoginContext } from "../../context/LoginContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const SignUpScreen = ({ navigation }) => {
  //Comportamento esperado:
  //Tela de cadastro de usuário
  //Possivel radio button para escolha de cadastro entre motorista e passageiro
  //Se motorista for escolhido, novos campos obrigatorios aparecem na tela (validação de tela apenas), SE o botao estiver selecionado
  //Se passageiro for escolhido, a tela permanece a mesma (mantendo os campos escondidos não obrigatorios)
  //Se o botão trocar de valor, a mudança de tela e validação de dados deve se manter fiel à opção escolhida

  const { state, signup } = useContext(LoginContext);

  const inputElementRef = useRef(null);
  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: { fontFamily: "" },
    });
  });

  //Profile
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [cpf, setCpf] = useState("");
  const [photo, setPhoto] = useState(null);
  const [telephone, setTelephone] = useState(new Number());
  const [isDriver, setIsDriver] = useState(false);
  const [cnh, setCnh] = useState(new Number());

  //Car (id_perfil necessário)
  const [renavam, setRenavam] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [licensePlate, setLicensePlate] = useState("");

  //User (id_perfil necessário)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPasswword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [questionId, setQuestionId] = useState(0);
  const [secretQuestion, setSecretQuestion] = useState("");

  const passwordValidate = (password, confirmPassword) => {
    setConfirmPassword(confirmPassword);
    if (password != confirmPassword) {
      alert("Senhas não batem");
    } else {
      setPassword(password);
    }
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
            checked={!isDriver}
            onPress={() => setIsDriver(false)}
          />
          <CheckBox
            title="Motorista"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={isDriver}
            onPress={() => setIsDriver(true)}
          />
        </View>

        <View style={styles.form}>
          <Input
            placeholder="Nome"
            value={name}
            onTextInput={(text) => setNome(text)}
          />
          <Input placeholder="Data de Nascimento" />
          <Input placeholder="CPF" value={cpf} onTextInput={setCpf} />
          <Input
            placeholder="Telefone"
            value={telephone}
            onTextInput={setTelephone}
          />

          {!isDriver ? null : (
            <View>
              <Input placeholder="CNH" value={cnh} onTextInput={setCnh} />
              <Input
                placeholder="Renavam / CRLV"
                value={renavam}
                onTextInput={setRenavam}
              />
              <Input
                placeholder="Modelo do Veículo"
                value={model}
                onTextInput={setModel}
              />
              <Input
                placeholder="Cor do Veículo"
                value={color}
                onTextInput={setColor}
              />
              <Input
                placeholder="Placa do Veículo"
                value={licensePlate}
                onTextInput={setLicensePlate}
              />
            </View>
          )}

          <Input
            placeholder="E-mail para login"
            value={email}
            onTextInput={setEmail}
          />
          <Input
            placeholder="Senha"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="off"
            ref={inputElementRef}
            value={newPassword}
            onTextInput={setNewPasswword}
          />
          <Input
            placeholder="Confirmar senha"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="off"
            ref={inputElementRef}
            value={confirmPassword}
            onTextInput={(text) => passwordValidate(newPassword, text)}
          />
          <Text style={styles.label}>Escolha uma pergunta: </Text>
          <RNPickerSelect
            style={styles.dropdown}
            onValueChange={(value) => console.log(value)}
            placeholder={{}}
            items={[
              { label: "Football", value: "football" },
              { label: "Baseball", value: "baseball" },
              { label: "Hockey", value: "hockey" },
            ]}
          />
          <Input
            placeholder="Resposta Secreta"
            value={secretQuestion}
            onTextInput={setSecretQuestion}
          />
        </View>
        <View style={styles.btnLine}>
          <TouchableOpacity style={styles.btn}>
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
    color: "#3E475B",
    paddingLeft: 12,
  },
  dropdown: {
    paddingLeft: 52,
  },
});

export default SignUpScreen;
