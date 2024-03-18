import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Entypo,
  MaterialIcons,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

//pantallas
import HomeScreen from "../../screens/HomeScreen";
import StatScreen from "../../screens/StatScreen";
import NotifScreen from "../../screens/NotifScreen";
import ConfigScreen from "../../screens/ConfigScreen";

import PlusScreen from "../../screens/PlusScreen";
import MinusScreen from "../../screens/MinusScreen";

//Top navigation
const TopTab = createMaterialTopTabNavigator();

function TopTapGroup() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: "black" },
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
        
      }}
    >
      <TopTab.Screen name="Resumen" component={HomeScreen} />
      <TopTab.Screen name="Ingresos" component={PlusScreen} />
      <TopTab.Screen name="Gastos" component={MinusScreen} />
    </TopTab.Navigator>
  );
}

//Bottom navigation
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "orange",
        tabBarStyle: { backgroundColor: "black" },
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={TopTapGroup}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Estadísticas"
        component={StatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="query-stats" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificaciones"
        component={NotifScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={ConfigScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
