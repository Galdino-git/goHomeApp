import createDataContext from "./createDataContext";
import goHomeApi from "../api/goHomeAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../_navigationRef";

const LoginReducer = (state, action) => {
  switch (action.type) {
    case ("signup", "signin"):
      return { ...state, token: action.payload };
    case "error":
      return { ...state, errorMessage: action.payload };
    case "fill_questions":
      return { ...state, questions: action.payload };
    case "signout":
      return { token: null, errorMessage: "" };
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
  _id_Secret_Question,
  secret_Answer,
}) => {
  try {
    const responseProfile = await goHomeApi
      .post("/profile/create", {
        name: "Nome",
        birthdate: "29/05/1991",
        cpf: "2",
        photo: "123",
        telephone: "2",
        is_Driver: false,
        rating: "",
        cnh: "",
      })
      .then((response) => response.data);
    const _id_Profile = responseProfile.profile._id;
    console.log(_id_Profile);
    const responseCar = await goHomeApi
      .post("/car/create", {
        renavam: "2",
        model: "dsa",
        color: "1234",
        license_plate: "2",
        _id_Profile,
      })
      .then((response) => response.data);

    const responseUser = await goHomeApi
      .post("/signup", {
        email: "email2",
        password: "12345",
        _id_Secret_Question: "5fcb0c991b80fb3698e54450",
        secret_Answer: "segredo",
        _id_Profile,
      })
      .then((response) => response.data);
    console.log("---");
    console.log(responseProfile);
    console.log("---");
    console.log(responseCar);
    console.log("---");
    console.log(responseUser);
    console.log("---");

    await AsyncStorage.setItem("token", responseUser.token);
    dispatch({ type: "signup", payload: responseUser.token });
    navigate("mainFlow");
  } catch (erro) {
    dispatch({
      type: "error",
      payload: "Algo de errado ocorreu durante o processo de cadastro.",
    });
    console.log(erro.message);
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
    const response = await goHomeApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("mainFlow");
  } catch (erro) {
    dispatch({
      type: "error",
      payload: "Algo deu errado durante a tentativa de login.",
    });
  }
};

const secretQuestions = (dispatch) => async () => {
  try {
    const questions = await goHomeApi.get("/secretquestion/read");
    if (!questions) {
      dispatch({
        type: "error",
        payload: "Nenhuma pergunta foi encontrada.",
      });
    }
    dispatch({ type: "fill_questions", payload: questions });
  } catch (erro) {
    dispatch({
      type: "error",
      payload: erro.message,
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

export const { Provider, Context } = createDataContext(
  LoginReducer,
  { signin, signup, signout, automaticLogin, secretQuestions },
  { token: null, errorMessage: "", questions: [] }
);
