import { useEffect } from "react";
import PostDetails from "../components/PostDetails/PostDetails";
import { useParams } from "react-router-dom";
import axios from "../apis/data";
import useAxios from "../hooks/useAxios";

const PostPage = () => {
  return (
    <div>
      <PostDetails />
    </div>
  );
};

export default PostPage;
