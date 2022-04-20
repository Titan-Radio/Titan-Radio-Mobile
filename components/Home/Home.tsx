import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import { assests, COLORS } from "../../constants";
import { FONTFAM, FONTSIZES } from "../../constants/fonts";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { homeScreenProps } from "../../screens/Home/Home";
import { RootStackParamList } from "../CustomNavigation/CustomNavigation";

interface exploreSection {
  id: number;
  label: string;
  routes: string;
}

const sections: exploreSection[] = [
  {
    id: 1,
    label: "Blogs",
    routes: "Blogs",
  },
  {
    id: 2,
    label: "About",
    routes: "About",
  },
  {
    id: 3,
    label: "The Feed",
    routes: "TheFeed",
  },
  {
    id: 4,
    label: "After hours",
    routes: "AfterHours",
  },
];

export const Greeting: React.FC = () => {
  return (
    <View style={GreetingStyles.container}>
      <Text style={GreetingStyles.title}> Good Morning, </Text>
      <View style={GreetingStyles.imageContainer}>
        <Image
          style={GreetingStyles.banner}
          source={assests.trBanner}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

interface ExploreProps {
  navigation: homeScreenProps;
}

export const Explore: React.FC<ExploreProps> = ({ navigation }) => {
  return (
    <View style={exploreStyles.container}>
      <Text style={exploreStyles.title}> Explore Us </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={sections}
        renderItem={({ item }) => (
          <ExploreSection data={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

interface ExploreSectionProps {
  data: exploreSection;
  navigation: homeScreenProps;
}

export const ExploreSection: React.FC<ExploreSectionProps> = (props) => {
  const { data, navigation } = props;
  const sectionNavigation = (routes: keyof RootStackParamList) => {
    navigation.navigate(`${routes}`);
  };
  return (
    <TouchableWithoutFeedback onPress={() => sectionNavigation((data.routes) as keyof RootStackParamList)}>
      <View style={listStyles.container}>
        <Text style={listStyles.title}>{data.label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

/* ------ Style ------- */
const GreetingStyles = StyleSheet.create({
  container: {
    padding: 12,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
  },
  banner: {
    position: "absolute",
    top: 50,
    borderRadius: 12,
    zIndex: 1,
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: FONTSIZES.xxLarge,
    fontFamily: FONTFAM.interBold,
  },
});

const exploreStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  title: {
    color: "black",
    marginTop: 100,
    fontSize: FONTSIZES.xLarge,
    fontFamily: FONTFAM.interBold,
  },
});

const listStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.trPurple,
    width: 103,
    height: 103,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
    marginVertical: 12,
    borderRadius: 12,
  },
  title: {
    fontSize: FONTSIZES.large,
    fontFamily: FONTFAM.interMedium,
    color: "white",
    textAlign: "center",
  },
});
