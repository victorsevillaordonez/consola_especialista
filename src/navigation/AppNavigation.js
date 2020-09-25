import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabScreen from "./../screens/TabScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import SplashScreen from "../screens/Auth/SplashScreen";
import { AsyncStorage } from "react-native";

const isLogged = async () => {
  const userToken = await AsyncStorage.getItem("userToken");
  const isLoggedIn = userToken !== null && userToken !== "";
  return isLoggedIn;
};

const AppNavigation = () => {
  var isLoggedIn = isLogged();
  isLoggedIn = false 
  console.log("isLoggedIn:"+isLoggedIn)
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <TabScreen />
      ) : (
        <Stack.Navigator> 
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="TabScreen" component={TabScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
