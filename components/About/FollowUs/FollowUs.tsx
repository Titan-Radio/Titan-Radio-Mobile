import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { FONTSIZES } from "../../../constants/fonts";
import { SvgXml } from "react-native-svg";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setBlogRoute } from "../../../redux/navSlice";
import { social } from "../Data/social-links";
import { socialLinkType } from "../interface";

export const FollowUs = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const goToSocial = (url: string) => {
    dispatch(setBlogRoute(url));
    navigation.navigate(`Browser`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}> https://www.titanradio.org/</Text>
      {social.map((text: socialLinkType) => {
        return (
          <View style={styles.wrapper}>
            <SvgXml xml={text.icon} />
            <TouchableWithoutFeedback onPress={() => goToSocial(text.url)}>
              <Text style={styles.text}> {text.shortURL} </Text>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </View>
  );
};

//STYLES
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    padding: 7,
    borderRadius: 10,
    color: "black",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    color: "white",
    marginTop: -12,
    fontSize: FONTSIZES.medium,
    textAlign: "center",
  },
  container: {
    display: "flex",
  },
  text: {
    padding: 5,
    textAlign: "center",
    backgroundColor: "white",
    width: "85%",
    alignItems: "center",
  },
});
