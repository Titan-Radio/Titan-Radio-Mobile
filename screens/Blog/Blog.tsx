import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AllBlogs, BlogHeader } from "../../components/Blog/Blog";
import useBlog from "../../components/Blog/Hooks/useBlog";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../components/CustomNavigation/CustomNavigation";
import { useSelector } from "react-redux";
import { rootState } from "../../components/interface";

export type blogScreenProps = StackNavigationProp<RootStackParamList, "Blogs">;

const Blog: React.FC = () => {
  const page = useSelector((state: rootState) => state.blog.page);
  const [isLoading, blogs, isError, success] = useBlog(
    `https://www.titanradio.org/wp-json/wp/v2/posts?page=${page}`
  );
  const navigation = useNavigation<blogScreenProps>();
  useEffect(() => {
    console.log(page);
  }, []);
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
