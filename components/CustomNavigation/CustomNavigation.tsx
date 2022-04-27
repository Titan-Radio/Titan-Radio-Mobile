import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/Home/Home";
import About from "../../screens/About/About";
import Blog from "../../screens/Blog/Blog";
import Browser from "../../screens/Browser/Browser";

export type RootStackParamList = {
  Home: undefined;
  Blogs: undefined;
  About: undefined;
  Browser: undefined;
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
        component={Blog}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Browser" component={Browser}/>
    </Stack.Navigator>
  );
};

export default HomeNavigation;
