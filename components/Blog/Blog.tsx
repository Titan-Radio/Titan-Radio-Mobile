import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { FONTFAM, FONTSIZES } from "../../constants/fonts";
import { incPage } from "../../redux/blogSlice";
import { setBlogRoute } from "../../redux/navSlice";
import { blogScreenProps } from "../../screens/Blog/Blog";
import { convertSymbolsFromCode } from "./helper/helperFunction";
import { BlogType } from "./interface";

/* BLOG HEADER COMPONENT */

export const BlogHeader: React.FC = () => {
  return (
    <View style={headingStyles.textContainer}>
      <Text style={headingStyles.textTitle}>Blogs</Text>
      <Text style={headingStyles.textSubTitle}>All blogs from Titan Radio</Text>
    </View>
  );
};

/* ALL BLOGS COMPONENT */

interface AllBlogsProps {
  blogs: BlogType[];
  navigation: blogScreenProps;
}

export const AllBlogs: React.FC<AllBlogsProps> = (props) => {
  const { blogs, navigation } = props;
  const dispatch = useDispatch();
  const loadMore = () => {
    dispatch(incPage());
  };
  return (
    <>
      <View>
        <FlatList
          data={blogs}
          renderItem={(blog: any) => (
            <Blog blog={blog.item} navigation={navigation} />
          )}
          onEndReachedThreshold={0.01}
          onEndReached={() => loadMore()}
        />
      </View>
    </>
  );
};

/* EACH BLOG COMPONENT */

interface BlogProps {
  blog: BlogType;
  navigation: blogScreenProps;
}

export const Blog: React.FC<BlogProps> = (props) => {
  const dispatch = useDispatch();
  const { blog, navigation } = props;
  const goToBlog = () => {
    dispatch(setBlogRoute(blog.link));
    navigation.navigate(`Browser`);
  };
  return (
    <TouchableWithoutFeedback onPress={goToBlog}>
      <View style={blogStyles.container}>
        <Image
          style={blogStyles.blogImage}
          source={{
            uri: blog.image,
          }}
        />
        <Text style={blogStyles.blogTitle}>
          {convertSymbolsFromCode(blog.title.rendered)}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

/* --------------- STYLES ---------------- */
const headingStyles = StyleSheet.create({
  textContainer: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
  textTitle: {
    fontSize: FONTSIZES.large,
    padding: 0,
    margin: 0,
    fontWeight: "600",
  },
  textSubTitle: {
    marginVertical: 10,
    fontWeight: "300",
  },
});

const blogStyles = StyleSheet.create({
  blogImage: {
    height: 124,
    width: 124,
    resizeMode: "cover",
  },
  blogTitle: {
    fontSize: FONTSIZES.medium,
    fontFamily: FONTFAM.interMedium,
    marginLeft: 8,
    width: "60%",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 0,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: "grey",
    width: "100%",
    marginVertical: 12,
    marginHorizontal: 12,
  },
});
