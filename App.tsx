import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./screens/Home/Home";
import { useFonts } from "expo-font";
import { COLORS } from "./constants";
import Blogs from "./screens/Blogs/Blogs";
import About from "./screens/About/About";

export type RootStackParamList = {
  Home: undefined;
  Blogs: undefined;
  About: undefined;
  TheFeed: undefined;
  AfterHours: undefined;
};

export type TabParamList = {
  Home: undefined;
  Schedule: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.trPurple,
  },
};

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
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
