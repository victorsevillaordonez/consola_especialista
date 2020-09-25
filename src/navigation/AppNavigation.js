import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createCompatNavigatorFactory } from '@react-navigation/compat'
// import {TabScreen} from './../screens/TabScreen'

// import {AuthLoadingScreen} from '../screens/Auth/AuthLoadingScreen'
import LoginScreen  from "../screens/Auth/LoginScreen";
import  SplashScreen from "../screens/Auth/SplashScreen";
import { Switch } from "react-native-gesture-handler";
//

// const AppStack = createStackNavigator({ TabScreen });
// const AuthStack = createStackNavigator();
// {
  /* <AuthStack.Navigator initialRouteName="Login">
  <AuthStack.Screen
    name="Login"
    component={LoginScreen}
    options={{ headerShown: false }}
  />
</AuthStack.Navigator>; */
// }
// const AppStackScreen = createAppContainer(
//   createSwitchNavigator(
//     {
//       Starter: AuthLoadingScreen,
//       // App: AppStack,
//       Auth: AuthStack,
//     },
//     {
//       initialRouteName: "Starter",
//     }
//   )
// );

const AuthStack = createCompatNavigatorFactory(createStackNavigator)({ screen:LoginScreen });
const SwitchNavigator = createSwitchNavigator({
  Starter: AuthStack ,
  App: AuthStack,
  Auth: AuthStack, 
},{
  initialRouteName:'Starter'
});

const Stack = createStackNavigator();
function AppNavigation() {
  return (
    <NavigationContainer>
      <SwitchNavigator/>
      {/* <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator> */}
     </NavigationContainer>
  );
}

export default AppNavigation;
