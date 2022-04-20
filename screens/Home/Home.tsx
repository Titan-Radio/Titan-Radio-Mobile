import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants";
import { Explore, Greeting } from "../../components/Home/Home";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../components/CustomNavigation/CustomNavigation";

export type homeScreenProps = StackNavigationProp<RootStackParamList, "Home">;

export type TabParamList = {
  HomeScreen: undefined;
  Schedule: undefined;
};

// export const HomeTabScreen: React.FC = () => {
//   return (
//     <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeTabScreen}
//         />
//         <Stack.Screen
//           name="Blogs"
//           component={Blogs}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Stack.Screen
//           name="About"
//           component={About}
//         />
//       </Stack.Navigator>
//   );
// };

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<homeScreenProps>();
  return (
    <>
      <SafeAreaView style={styles.topContainer}>
        <Greeting />
      </SafeAreaView>
      <SafeAreaView style={styles.bottomContainer}>
        <Explore navigation={navigation} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.4,
    backgroundColor: COLORS.trPurple,
  },
  bottomContainer: {
    flex: 0.6,
    zIndex: -2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
  },
});

export default HomeScreen;
