import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { rootState } from "../../interface";
import { useDispatch } from "react-redux";
import { BlogType } from "../interface";


const useBlog = (url: string) => {
  const [isLoading, setLoading] = useState<boolean>();
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [success, setSuccess] = useState(false);
  const page = useSelector((state: rootState) => state.blog.page);
  const dispatch = useDispatch();
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
    return () => {
    };
  }, [page]);

  return [isLoading, blogs, isError, success] as const;
};

export default useBlog;
