import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import WebView from "react-native-webview";
import { useSelector } from "react-redux";
import { rootState } from "../../components/interface";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../components/CustomNavigation/CustomNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

type browserScreenProps = StackNavigationProp<RootStackParamList, "Browser">;

const Browser: React.FC = () => {
  const navigation = useNavigation<browserScreenProps>();
  const url = useSelector((state: rootState) => state.nav.blogRoutes);
  const goback = () => {
    navigation.navigate("Blogs");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.back}>
        <AntDesign name="left" size={32} color="white" onPress={goback} />
      </View>
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  back: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
});

export default Browser;
