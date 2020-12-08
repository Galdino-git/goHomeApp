import createDataContext from "./createDataContext";
import goHomeApi from "../api/goHomeAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../_navigationRef";

const LoginReducer = (state, action) => {
  switch (action.type) {
    case ("signup", "signin"):
      return { ...state, token: action.payload, photoUri: action.photo };
    case "error":
      return { ...state, errorMessage: action.payload };
    case "signout":
      return { token: null, errorMessage: "", photoUri: null };
    case "getPhoto":
      return { ...state, photoUri: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({
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
}) => {
  //#region Validações
  if (!name) {
    dispatch({
      type: "error",
      payload: "Nome precisa ser informado!",
    });
    return;
  }

  const isTodayOrAfter = (birthdate) => {
    const today = new Date();
    var todayYear = today.getFullYear();
    var birthdateYear = birthdate.getFullYear();

    if (todayYear == birthdateYear) {
      return true;
    } else {
      return false;
    }
  };

  if (isTodayOrAfter(birthdate)) {
    dispatch({
      type: "error",
      payload: "Data de aniversário deve ser diferente de hoje!",
    });
    return;
  }

  if (!cpf) {
    dispatch({
      type: "error",
      payload: "CPF precisa ser informado!",
    });
    return;
  }

  if (!photo) {
    dispatch({
      type: "error",
      payload: "Uma foto precisa ser fornecida!",
    });
    return;
  }

  if (!telephone) {
    dispatch({
      type: "error",
      payload: "Telefone precisa ser informado!",
    });
    return;
  }

  if (!cnh && is_Driver) {
    dispatch({
      type: "error",
      payload: "CNH precisa ser informada!",
    });
    return;
  }

  if (!renavam && is_Driver) {
    dispatch({
      type: "error",
      payload: "Renavam precisa ser informado!",
    });
    return;
  }

  if (!model && is_Driver) {
    dispatch({
      type: "error",
      payload: "Modelo do veículo precisa ser informado!",
    });
    return;
  }

  if (!color && is_Driver) {
    dispatch({
      type: "error",
      payload: "Cor do veículo precisa ser informado!",
    });
    return;
  }

  if (!license_plate && is_Driver) {
    dispatch({
      type: "error",
      payload: "Placa do veículo precisa ser informada!",
    });
    return;
  }

  if (!email) {
    dispatch({
      type: "error",
      payload: "Email precisa ser informado!",
    });
    return;
  }

  if (!password) {
    dispatch({
      type: "error",
      payload: "Senha precisa ser informada!",
    });
    return;
  }

  if (password !== confirmPassword) {
    dispatch({
      type: "error",
      payload: "A confirmação da senha está incorreta!",
    });
    return;
  }

  if (!_id_Secret_Question) {
    dispatch({
      type: "error",
      payload: "Pergunta para recuperação de senha precisa ser informada!",
    });
    return;
  }

  if (!secret_Answer) {
    dispatch({
      type: "error",
      payload: "Resposta secreta precisa ser informada!",
    });
    return;
  }

  //#endregion

  const formData = new FormData();
  formData.append("profileImg", photo);
  axios
    .post("http://localhost:4000/api/user-profile", formData, {})
    .then((res) => {
      console.log(res);
    });

  try {
    const responseProfile = await goHomeApi
      .post("/profile/create", formData, {
        name,
        birthdate,
        cpf,
        photo,
        telephone,
        is_Driver,
        cnh,
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));

    const _id_Profile = responseProfile.profile._id;

    if (is_Driver) {
      const responseCar = await goHomeApi
        .post("/car/create", {
          renavam,
          model,
          color,
          license_plate,
          _id_Profile,
        })
        .then((response) => response.data)
        .catch((error) => console.log(error.message));
    }

    const responseUser = await goHomeApi
      .post("/signup", {
        email,
        password,
        _id_Secret_Question,
        secret_Answer,
        _id_Profile,
      })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));

    await AsyncStorage.setItem("token", responseUser.token);
    dispatch({
      type: "signup",
      payload: responseUser.token,
      photo: responseProfile.profile.photo,
    });
    navigate("mainFlow");
  } catch (erro) {
    console.log(erro.message);
    dispatch({
      type: "error",
      payload: "Algo de errado ocorreu durante o processo de cadastro.",
    });
  }
};

const automaticLogin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("mainFlow");
  } else {
    navigate("loginFlow");
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await goHomeApi
      .post("/signin", { email, password })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));

    await AsyncStorage.setItem("token", response.token);
    dispatch({
      type: "signin",
      payload: response.token,
      photo: response.photoUri,
    });
    navigate("mainFlow");
  } catch (erro) {
    dispatch({
      type: "error",
      payload: "Algo deu errado durante a tentativa de login.",
    });
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

const passwordRecovery = (dispatch) => async ({
  email,
  _id_Secret_Question,
  secret_Answer,
}) => {
  //#region Validações
  if (!email) {
    dispatch({
      type: "error",
      payload: "Email não informado!",
    });
    return;
  }

  if (!_id_Secret_Question) {
    dispatch({
      type: "error",
      payload: "Pergunta não escolhida!",
    });
    return;
  }

  if (!secret_Answer) {
    dispatch({
      type: "error",
      payload: "Resposta secreta não informada!",
    });
    return;
  }
  //#endregion

  console.log(email);
  if (email != "email" && email != "email2") {
    dispatch({
      type: "error",
      payload: "Não foi possível recuperar o acesso.",
    });
    return;
  }

  try {
    const response = await goHomeApi
      .post("/signin2", { email })
      .then((response) => response.data);

    await AsyncStorage.setItem("token", response.token);
    dispatch({ type: "signin", payload: response.token });
    navigate("Profile");
  } catch (error) {
    console.log(error);
    dispatch({
      type: "error",
      payload: "Algo deu errado durante a tentativa de recuperação de senha.",
    });
  }
};

const returnPhoto = (dispatch) => async () => {
  const _id = AsyncStorage.getItem("token");

  try {
    const profile = await goHomeApi
      .get("/profile/getByUserId", { _id })
      .then((response) => response.data)
      .catch((error) => console.log(error.message));

    if (!profile) {
      dispatch({
        type: "error",
        payload: "Algo deu errado durante a tentativa de buscar a foto.",
      });
      return;
    }

    dispatch({
      type: "getPhoto",
      payload: profile.photo,
    });
  } catch (error) {
    dispatch({
      type: "error",
      payload: "Algo deu errado durante a tentativa de buscar a foto.",
    });
  }
};

export const { Provider, Context } = createDataContext(
  LoginReducer,
  {
    signin,
    signup,
    signout,
    automaticLogin,
    clearErrorMessage,
    passwordRecovery,
    returnPhoto,
  },
  { token: null, errorMessage: "", photoUri: null }
);
