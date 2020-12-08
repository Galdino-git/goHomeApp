import createDataContext from "./createDataContext";
// import { navigate } from "../_navigationRef";

const RouteReducer = (state, action) => {
  switch (action.type) {
    case "send_routes":
      return {
        listaBairros: action.payload,
        campus: action.campus,
        gotInside: false,
        hasStarted: false,
      };
    case "pass_enter":
      return { ...state, gotInside: action.payload };
    case "has_started":
      return { ...state, hasStarted: action.payload };
    default:
      return state;
  }
};

const sendRoute = (dispatch) => async (routes, campus) => {
  dispatch({
    type: "send_routes",
    payload: routes,
    campus: campus,
  });
};

const getInRide = (dispatch) => async () => {
  dispatch({
    type: "pass_enter",
    payload: true,
  });
};

const startRide = (dispatch) => async () => {
  dispatch({
    type: "has_started",
    payload: true,
  });
};

export const { Provider, Context } = createDataContext(
  RouteReducer,
  {
    sendRoute,
    getInRide,
    startRide,
  },
  { listaBairros: [], campus: null, gotInside: false, hasStarted: false }
);
