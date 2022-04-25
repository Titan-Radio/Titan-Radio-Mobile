import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

interface BlogImageType {
  guild: {
    rendered: string;
  };
}

export interface BlogType {
  id: number;
  date_gmt: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  _links: {
    "wp:featuredmedia": [
      {
        href: string;
      }
    ];
  };
  image: any;
}

const useBlog = (url: string) => {
  const [isLoading, setLoading] = useState<boolean>();
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [success, setSuccess] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [isError, setErrror] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const configurationObject = {
          method: "get",
          url: url,
        };
        const res = await axios(configurationObject);
        await Promise.all(
          res.data.map(async (blog: BlogType) => {
            let imageRes = await axios.get(
              blog._links["wp:featuredmedia"][0].href
            );
            console.log(imageRes.data?.guid.rendered);
            setBlogs((b) => [
              ...b,
              {
                ...blog,
                image: imageRes?.data?.guid.rendered,
              },
            ]);
          
          })
        );
        setLoading(false);
        setSuccess(true);
      } catch (err) {
        setSuccess(false);
        setLoading(false);
        setErrror(true);
      }
    };
    fetchData();
  }, []);

  return [isLoading, blogs, isError, success] as const;
};

export default useBlog;
