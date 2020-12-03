import React from "react";
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
import ChatScreen from "./src/screens/main/ride/chat/ChatScreen";
import RideScreen from "./src/screens/main/ride/RideScreen";
import Evaluation from "./src/screens/main/ride/Evaluation";
import PasswordRecoveryScreen from "./src/screens/login/PasswordRecoveryScreen";
import LoadingScreen from "./src/screens/LoadingScreen";

import { Provider as LoginProvider } from "./src/context/LoginContext";

const navigator = createSwitchNavigator({
  //Loading: LoadingScreen,
  loginFlow: createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    PasswordRecovery: PasswordRecoveryScreen,
  }),
  mainFlow: createStackNavigator({
    menuFlow: createDrawerNavigator({
      Menu: MenuScreen,
      Historic: HistoricScreen,
      Profile: ProfileScreen,
    }),
    rideFlow: createSwitchNavigator({
      chatFlow: createStackNavigator({
        SearchRide: SearchRideScreen,
        Chat: ChatScreen,
        StartRide: StartRideScreen,
      }),
      Ride: RideScreen,
      Evaluation: Evaluation,
    }),
  }),
});

const App = createAppContainer(navigator);

export default () => {
  {
    return (
      <LoginProvider>
        <App />
      </LoginProvider>
    );
  }
};
