import { View, Text, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
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
  const browserRef = useRef<WebView>(null);
  const goback = () => {
    navigation.goBack();
  };
  const gobackPage = () => {
    browserRef.current?.goBack();
  };
  const goForwardPage = () => {
    browserRef.current?.goForward();
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.back}>
        <Feather name="x" size={32} color="white" onPress={goback} />
      </View>
      <WebView source={{ uri: url }} ref={browserRef} style={{ flex: 1 }} />
      <View style={styles.navigateContainer}>
      <View style={styles.backPage}>
        <AntDesign name="left" size={32} color="white" onPress={gobackPage} />
      </View>
      <View style={styles.forwardPage}>
        <AntDesign name="right" size={32} color="white" onPress={goForwardPage} />
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navigateContainer: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  back: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
  backPage: {
    marginTop:20,
    marginLeft:20,
  },
  forwardPage:{
    marginTop:20,
    marginRight:20,
  }
});

export default Browser;
