import { FlatList, Image, StyleSheet, View } from "react-native";
import React from "react";
import { url } from "../Data/staff-images";

export const TeamCollection = () => {
  return (
    <View style={collectionStyle.container}>
      {url.map((item) => {
        return <Image source={{ uri: item }} style={collectionStyle.img} />;
      })}
    </View>
  );
};

// STYLES
const collectionStyle = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    display:"flex",
    flexDirection:"row",
    justifyContent: "center",
  },
  img: {
    height: 72,
    width: 72,
  },
});
