import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { Children } from "react";
import { SvgXml } from "react-native-svg";
import { logoXml } from "../../assets/images/svgImages";


const xml = logoXml 

const Layout: React.FC = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={layoutStyles.container}>
        <SvgXml xml={xml} style={layoutStyles.image} />
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

const layoutStyles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 0,
    width: "100%",
  },
  image: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: "contain",
  },
});

export default Layout;
