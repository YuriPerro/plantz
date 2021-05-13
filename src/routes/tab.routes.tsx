import React from "react";
import colors from "../styles/colors";
import { PlantSelect } from "../pages/PlantSelect";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { MyPlants } from "../pages/MyPlants";

import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions, // optional
} from "react-native-animated-nav-tab-bar";

interface TabProps {
  size: number;
  color: string;
}

const Tabs = AnimatedTabBarNavigator();

const AuthRoutes = () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.heading,
      activeBackgroundColor: colors.green_light
    }}
    appearance={{}}
  >
    <Tabs.Screen
      name="Nova Planta"
      component={PlantSelect}
      options={{
        tabBarIcon: ({ size, color }: TabProps) => (
          <MaterialIcons name="add-circle-outline" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Minhas Plantas"
      component={MyPlants}
      options={{
        tabBarIcon: ({ size, color }: TabProps) => (
          <Ionicons name="list-circle-outline" size={size} color={color} />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default AuthRoutes;
