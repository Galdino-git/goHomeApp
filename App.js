import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {NativeRouter as Router, Route, Switch, Link} from 'react-router-native';
import {Font} from 'expo';

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


export default class App extends React.Component{

    render(){
      return(
        <Router>
         <View style={style.base}>
           <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route exact path="/SignInScreen" component={SignInScreen} />
            <Route exact path="/MenuScreen" component={MenuScreen} />
            <Route exact path="/SearchRideScreen" component={SearchRideScreen} />
            <Route exact path="/StartRideScreen" component={StartRideScreen} />
            <Route exact path="/RideScreen" component={RideScreen} />
            <Route exact path="/ChatScreen" component={ChatScreen} />
            <Route exact path="/passwdScreen" component={PasswordRecoveryScreen} />
            <Route exact path="/ProfileScreen" component={PasswordRecoveryScreen} />
           </Switch>
         </View>
       </Router>
      );
    }


}


const style = StyleSheet.create({
  base: {
    paddingTop: 24,
  }
});






// const navigator = createStackNavigator(


  
  // {
  //   Login: LoginScreen,
  //   PasswordRecovery: PasswordRecoveryScreen,
  //   SignIn: SignInScreen,
  //   Menu: MenuScreen,
  //   Profile: ProfileScreen,
  //   Historic: HistoricScren,
  //   StartRide: StartRideScreen,
  //   SearchRide: SearchRideScreen,
  //   ChatScreen: ChatScreen,
  //   Ride: RideScreen,
  // },
  // {
  //   initialRouteName: "Login",
  //   defaultNavigationOptions: {
  //     title: "GoHome",
  //     headerTitleAlign: "center",
  //   },
  // }
// );

// export default createAppContainer(navigator);
