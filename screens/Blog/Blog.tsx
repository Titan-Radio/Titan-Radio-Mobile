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
import { useDispatch } from "react-redux";
import { resetPage } from "../../redux/blogSlice";
import Layout from "../../components/Layout/Layout";

export type blogScreenProps = StackNavigationProp<RootStackParamList, "Blogs">;

const Blog: React.FC = () => {
  const page = useSelector((state: rootState) => state.blog.page);
  const [isLoading, blogs, isError, success] = useBlog(
    `https://www.titanradio.org/wp-json/wp/v2/posts?page=${page}`
  );
  const dispatch = useDispatch();
  const navigation = useNavigation<blogScreenProps>();
  useEffect(() => {
    return () => {
      dispatch(resetPage());
    };
  }, []);
  return (
    <Layout>
      <BlogHeader />
      {isLoading && <Text> Loading... </Text>}
      {success && <AllBlogs blogs={blogs} navigation={navigation} />}
    </Layout>
  );
};


export default Blog;
