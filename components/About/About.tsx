import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { bigLogoXml, soundOfCSUF } from "../../assets/images/svgImages";
import { COLORS } from "../../constants";
import { FONTFAM, FONTSIZES } from "../../constants/fonts";
import { useSwipe } from "./Hooks/useSwipe";
import { contentListType, contentNavType } from "./interface";
import { TeamCollection } from "./TeamImages/TeamCollection";
import {FollowUs} from "./FollowUs/FollowUs";

const bigLogo = bigLogoXml;
const bannerText = soundOfCSUF;

/* ABOUT HEADER COMPONENT */
export const AboutHeader = () => {
  return (
    <View style={headerStyles.container}>
      <SvgXml xml={bigLogo} />
      <SvgXml xml={bannerText} />
    </View>
  );
};

/* ABOUT CONTENT COMPONENT */

const contentList: contentListType[] = [
  {
    id: "c1",
    header: "Who we are",
    content: `Titan Radio is California State University, Fullerton’s official radio station.
          \n We host over 70 student and faculty on-air DJs per semester. 
          \n Along with our 24/7 broadcast, we also host events, post online articles, and actively interact with our listeners through social media.`,
  },
  {
    id: "c2",
    header: "Our team",
    content: <TeamCollection/>
  },
  {
    id: "c3",
    header: "Follow us",
    content: <FollowUs/>,
  },
];



export const AboutContent = () => {
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);
  const [page, setPage] = useState<number>(0);

  function onSwipeLeft() {
    if (page >= 0 && page < 2) {
      setPage((p) => p + 1);
    }
  }

  function onSwipeRight() {
    if (page > 0 && page <= 2) {
      setPage((p) => p - 1);
    }
  }

  return (
    <View
      style={aboutStyles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Text style={aboutStyles.header}> {contentList[page].header} </Text>
      <Text style={aboutStyles.sub}>{contentList[page].content}</Text>
      <View style={aboutStyles.circleContainer}>
        <AboutNavigation page={page} />
      </View>
    </View>
  );
};

/* CIRCLE NAVIGATION COMPONENT */

const navList: contentNavType[] = [
  { id: "nav1", content: "" },
  { id: "nav2", content: "" },
  { id: "nav3", content: "" },
];

interface navProps {
  page: number;
}

export const AboutNavigation: React.FC<navProps> = (props) => {
  const { page } = props;
  return (
    <View>
      <FlatList
        horizontal={true}
        data={navList}
        renderItem={({ index, item }) => (
          <>
            {index == page ? (
              <View style={navStyles.circleActive}>
                <Text>{item.content}</Text>
              </View>
            ) : (
              <View style={navStyles.circle}>
                <Text>{item.content}</Text>
              </View>
            )}
          </>
        )}
      />
    </View>
  );
};

/* --------------- STYLES ---------------- */
const headerStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
});

const aboutStyles = StyleSheet.create({
  container: {
    marginTop: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    backgroundColor: COLORS.trPurple,
    borderRadius: 12,
  },
  header: {
    marginVertical: 20,
    color: "white",
    fontSize: FONTSIZES.xLarge,
    fontFamily: FONTFAM.interBold,
  },
  sub: {
    textAlign: "center",
    lineHeight: 25,
    marginBottom: 32,
    marginHorizontal: 20,
    fontSize: FONTSIZES.medium,
    fontFamily: FONTFAM.robotoMedium,
    color: "white",
  },
  circleContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

const navStyles = StyleSheet.create({
  circleActive: {
    marginHorizontal: 12,
    width: 14,
    marginBottom: 18,
    height: 14,
    borderRadius: 14 / 2,
    backgroundColor: COLORS.trBabyBlue,
  },
  circle: {
    marginHorizontal: 12,
    width: 14,
    marginBottom: 18,
    height: 14,
    borderRadius: 14 / 2,
    backgroundColor: COLORS.trGrey,
  },
});
