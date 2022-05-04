import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/Home/Home";
import About from "../../screens/About/About";
import Blog from "../../screens/Blog/Blog";
import Browser from "../../screens/Browser/Browser";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Blogs: undefined;
  About: undefined;
  Browser: undefined;
  TheFeed: undefined;
  AfterHours: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeNavigation = ({ navigation, route }) => {
  //Hide tab bar for Browser
  const parent = navigation.getParent();
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Browser") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Blogs"
        component={Blog}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen
        name="Browser"
        component={Browser}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
