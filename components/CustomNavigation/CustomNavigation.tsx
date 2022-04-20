import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/Home/Home";
import Blogs from "../../screens/Blogs/Blogs";
import About from "../../screens/About/About";

export type RootStackParamList = {
  Home: undefined;
  Blogs: undefined;
  About: undefined;
  TheFeed: undefined;
  AfterHours: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Blogs"
        component={Blogs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
