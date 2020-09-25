import React from "react";
// import { AsyncStorage } from 'react-native'
// import { Ionicons } from '@expo/vector-icons';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MyPortalScreen from "./Home/MyPortalScreen";
import NewCaseScreen from "./Home/NewCaseScreen";
import MyRequestsScreen from "./Home/MyRequestsScreen";
import AssistanceScreen from "./Home/AssistanceScreen";

export default function TabScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Ionicons  name="pluscircleo" size={50} />
              //   <Ionicons
              //     name={
              //       focused
              //         ? "ios-information-circle"
              //         : "ios-information-circle-outline"
              //     }
              //     size={size}
              //     color={color}
              //   />
            );
          } else if (route.name === "Settings") {
            return <IconAntDesign name="pluscircleo" size={50} />;
          }
          return <IconAntDesign name="caretup" size={30} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 13,
          margin: 0,
          padding: 0,
        },
      }}
    >
      <Tab.Screen name="Mi portal" component={MyPortalScreen}  />
      <Tab.Screen name="Nuevo caso" component={NewCaseScreen} />
      <Tab.Screen name="Mis solicitudes" component={MyRequestsScreen} />
      <Tab.Screen name="Asistencia" component={AssistanceScreen} />
    </Tab.Navigator>
  );
}
