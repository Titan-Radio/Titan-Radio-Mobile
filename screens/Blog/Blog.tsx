import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AllBlogs, BlogHeader } from "../../components/Blog/Blog";
import useBlog from "../../components/Blog/Hooks/useBlog";

const Blog: React.FC = () => {
  const [isLoading, blogs, isError, success] = useBlog("https://www.titanradio.org/wp-json/wp/v2/posts?per_page=8");

  return (
    <SafeAreaView style={styles.BlogContainer}>
      <BlogHeader />
      {success && ( 
          <AllBlogs blogs={blogs}/>
      )}
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
