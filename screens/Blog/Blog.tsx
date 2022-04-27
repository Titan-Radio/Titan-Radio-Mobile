import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AllBlogs, BlogHeader } from "../../components/Blog/Blog";
import useBlog from "../../components/Blog/Hooks/useBlog";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../components/CustomNavigation/CustomNavigation";

export type blogScreenProps = StackNavigationProp<RootStackParamList, "Blogs">;

const Blog: React.FC = () => {
  const [isLoading, blogs, isError, success] = useBlog(
    "https://www.titanradio.org/wp-json/wp/v2/posts?per_page=8"
  );
  const navigation = useNavigation<blogScreenProps>();

  return (
    <SafeAreaView style={styles.BlogContainer}>
      <BlogHeader />
      {isLoading && <Text> Loading... </Text>}
      {success && <AllBlogs blogs={blogs} navigation={navigation} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BlogContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Blog;
