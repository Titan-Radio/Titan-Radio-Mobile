import { View, Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout/Layout";
import { AboutContent, AboutHeader } from "../../components/About/About";


const About: React.FC = () => {
  return (
    <Layout>
      <View style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
      <AboutHeader/>
      <AboutContent/>
      </View>
    </Layout>
  );
};

export default About;
