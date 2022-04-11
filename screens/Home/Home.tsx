import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants";
import { Explore, Greeting } from "../../components/Home/Home";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";

export type homeScreenProps = StackNavigationProp<RootStackParamList,'Home'>;

const Home = () => {
  const navigation = useNavigation<homeScreenProps>();
  return (
    <>
      <SafeAreaView style={styles.topContainer}>
        <Greeting />
      </SafeAreaView>
      <SafeAreaView style={styles.bottomContainer}>
        <Explore navigation={navigation}/>
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

export default Home;
