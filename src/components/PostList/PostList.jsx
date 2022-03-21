import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";
import axios from "../../apis/data";
import PostItem from "../PostItem/PostItem";
import "./PostList.css";
import { Spinner } from "react-bootstrap";

const PostList = () => {
  const [posts, error, loading, axiosFetch] = useAxios();
  const getPosts = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "get",
      url: "/posts?_start=0&_limit=5",
    });
  };

  const [images, imageError, imageLoading, axiosFetchImage] = useAxios();
  const getData = () => {
    axiosFetchImage({
      axiosInstance: axios,
      method: "get",
      url: "/photos?_start=0&_limit=5",
    });
  };

  useEffect(() => {
    getData();
    getPosts();
    // eslint-disable-next-line
  }, []);
  let data = posts.map((post, i) => {
    return {
      id: post.id,
      userId: post.userId,
      title: post.title,
      body: post.body,
      url: images[i].url,
    };
  });


 

  return (
      <div className="post_list">
        <h3>Recent Sports News</h3>
        {loading && imageLoading && <Spinner animation="border" size="xxl" />}
        {data &&
          data.map((data) => (
            <PostItem
              key={data.id}
              title={data.title}
              body={data.body}
              id={data.id}
              picture={data.url}
            />
          ))}
        {error ||
          (imageError && <div className="error">ups something went wrong</div>)}
      </div>
  );
};

export default PostList;
