import React from "react";
import { TouchableOpacity } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import SignInScreen from "./src/screens/login/SignInScreen";
import SignUpScreen from "./src/screens/login/SignUpScreen";
import MenuScreen from "./src/screens/main/menu/MenuScreen";
import ProfileScreen from "./src/screens/main/menu/ProfileScreen";
import HistoricScreen from "./src/screens/main/menu/HistoricScreen";
import SearchRideScreen from "./src/screens/main/ride/chat/SearchRideScreen";
import StartRideScreen from "./src/screens/main/ride/chat/StartRideScreen";
import RideScreen from "./src/screens/main/ride/RideScreen";
import Evaluation from "./src/screens/main/ride/Evaluation";
import { EvilIcons } from "@expo/vector-icons";
import PasswordRecoveryScreen from "./src/screens/login/PasswordRecoveryScreen";
import { setNavigator } from "./src/_navigationRef";
import LoadingScreen from "./src/screens/LoadingScreen";
import CustomDrawer from "./src/component/CustomDrawer";

import { Provider as LoginProvider } from "./src/context/LoginContext";

const appNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  loginFlow: createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    PasswordRecovery: PasswordRecoveryScreen,
  }),
  mainFlow: createStackNavigator({
    menuFlow: createDrawerNavigator(
      {
        Menu: MenuScreen,
        Historico: HistoricScreen,
        Perfil: ProfileScreen,
      },
      {
        contentComponent: CustomDrawer,
        navigationOptions: { headerShown: false },
      }
    ),
    rideFlow: createSwitchNavigator({
      chatFlow: createStackNavigator({
        SearchRide: SearchRideScreen,
        StartRide: StartRideScreen,
      }),
      Ride: RideScreen,
      Evaluation: Evaluation,
    }),
  }),
});

const App = createAppContainer(appNavigator);

export default () => {
  {
    return (
      <LoginProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        ></App>
      </LoginProvider>
    );
  }
};
