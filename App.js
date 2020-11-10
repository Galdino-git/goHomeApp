import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/profile/LoginScreen";
import SignInScreen from "./src/screens/profile/SignInScreen";
import MenuScreen from "./src/screens/menu/MenuScreen";
import ProfileScreen from "./src/screens/profile/ProfileScreen";
import HistoricScren from "./src/screens/profile/HistoricScreen";
import SearchRideScreen from "./src/screens/ride/SearchRideScreen";
import StartRideScreen from "./src/screens/ride/StartRideScreen";
import ChatScreen from "./src/screens/ride/ChatScreen";
import RideScreen from "./src/screens/ride/RideScreen";
import PasswordRecoveryScreen from "./src/screens/profile/PasswordRecoveryScreen";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    PasswordRecovery: PasswordRecoveryScreen,
    SignIn: SignInScreen,
    Menu: MenuScreen,
    Profile: ProfileScreen,
    Historic: HistoricScren,
    StartRide: StartRideScreen,
    SearchRide: SearchRideScreen,
    ChatScreen: ChatScreen,
    Ride: RideScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "GoHome",
      headerTitleAlign: "center",
    },
  }
);

export default createAppContainer(navigator);
