import createDataContext from "./createDataContext";
import goHomeAPi from "../api/goHomeAPI";

const LoginReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await goHomeAPi.post("./signup", { email, password });
      console.log(response.data);
    } catch (erro) {
      console.log(erro.message);
    }
  };
};

const signin = (dispatch) => {
  return ({}) => {};
};

const signout = (dispatch) => {
  return ({}) => {};
};

export const { Provider, Context } = createDataContext(
  LoginReducer,
  { signin, signup, signout },
  { isSignedIn: false }
);
