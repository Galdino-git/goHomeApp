import React, { useState, useContext, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { CheckBox, Input } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import { FontAwesome5 } from "@expo/vector-icons";
import { Context as LoginContext } from "../../../context/LoginContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import goHomeApi from "../../../api/goHomeAPI";
import { NavigationEvents } from "react-navigation";
import * as ImagePicker from "expo-image-picker";

const ProfileScreen = ({ navigation }) => {
  const { state, updateData, clearErrorMessage } = useContext(LoginContext);
  const [showBirthdate, setShowBirthdate] = useState(false);
  const [questions, setQuestions] = useState([]);

  const inputElementRef = useRef(null);

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
  const [license_plate, setLicense_plate] = useState("");
  //#endregion

  //#region User (id_perfil necessário)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [_id_Secret_Question, set_Id_Secret_Question] = useState(0);
  const [secret_Answer, setSecret_Answer] = useState("");

  //#endregion

  //#region UseEffect Functions
  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: { fontFamily: "" },
    });
  });

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

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("É necessário permissão para acessar o rolo de fotos!");
        }
      }
    })();
  }, []);

  //#endregion

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
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

  useEffect(() => {
    if (state.profile) {
      const profile = state.profile;
      setName(profile.name);
      setCpf(profile.cpf);
      onChange(null, new Date(profile.birthdate));
      setTelephone(profile.telephone);
      // setPhoto(profile.photo);
      if (state.user) {
        const user = state.user;
        setEmail(user.email);
        setPassword(user.password);
        setSecret_Answer(user.secret_Answer);
        set_Id_Secret_Question(user._id_Secret_Question);
      }
      setIs_Driver(profile.is_Driver);
      if (profile.is_Driver) {
        setCnh(profile.cnh);
        if (state.car) {
          const car = state.car;
          setRenavam(car.renavam);
          setModel(car.model);
          setColor(car.color);
          setLicense_plate(car.license_plate);
        }
      }
    }
  }, []);

  return (
    <SafeAreaView style={styles.base}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <Text style={styles.title}>Perfil</Text>
        <View style={styles.profilePictureLine}>
          <TouchableOpacity
            onPress={pickImage}
            style={{ alignItems: "center" }}
          >
            {photo ? null : (
              <>
                <FontAwesome5
                  name="user-circle"
                  size={200}
                  color="black"
                  style={{ marginBottom: 10 }}
                />
                <Text style={styles.label}>
                  Clique na imagem para alterar a foto
                </Text>
              </>
            )}
            {photo && (
              <>
                <Image
                  source={{ uri: photo }}
                  style={{
                    width: 200,
                    height: 200,
                    alignItems: "center",
                    borderRadius: 100,
                    marginBottom: 10,
                  }}
                />
                <Text style={styles.label}>
                  Clique na imagem para alterar a foto
                </Text>
              </>
            )}
          </TouchableOpacity>
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
            onChangeText={setName}
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
                onChangeText={setCpf}
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
            onChangeText={setTelephone}
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
                    onChangeText={setCnh}
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
                    onChangeText={setRenavam}
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
                    onChangeText={setModel}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Input
                    label="Cor do Veículo"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="off"
                    value={color}
                    onChangeText={setColor}
                  />
                </View>
              </View>

              <Input
                label="Placa do Veículo"
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="off"
                maxLength={7}
                value={license_plate}
                onChangeText={setLicense_plate}
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
            onChangeText={setEmail}
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
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Input
                label="Nova senha"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="off"
                ref={inputElementRef}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
          </View>

          <Text style={styles.label}>Pergunta para recuperação de senha </Text>
          <View style={styles.dropdown}>
            <RNPickerSelect
              itemKey={_id_Secret_Question}
              useNativeAndroidPickerStyle={true}
              style={{ inputAndroid: { color: "black" } }}
              value={_id_Secret_Question}
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
        <View style={styles.btnLine}>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={styles.btnText}
              onPress={() => navigation.navigate("SignIn")}
            >
              Cancelar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              updateData({
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
                license_plate,
                email,
                password,
                confirmPassword,
                _id_Secret_Question,
                secret_Answer,
              });
            }}
          >
            <Text style={styles.btnText}>Atualizar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "red",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 12,
    paddingRight: 12,
  },
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
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  profilePictureLine: {
    marginVertical: 10,
    alignItems: "center",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

export default ProfileScreen;
