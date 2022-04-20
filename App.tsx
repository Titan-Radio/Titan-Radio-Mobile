import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { COLORS } from "./constants";
import HomeNavigation from "./components/CustomNavigation/CustomNavigation";


export type TabParamList = {
  HomeScreen: undefined;
  Schedule: undefined;
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.trPurple,
  },
};

const Tab = createBottomTabNavigator<TabParamList>();


const App: React.FC = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Light.ttf"),
  });
  if (!loaded) return null;
  return (
    <NavigationContainer theme={theme}>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === "HomeScreen") {
              iconName = focused ? "home" : "home-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "gray",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="HomeScreen" component={HomeNavigation} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
