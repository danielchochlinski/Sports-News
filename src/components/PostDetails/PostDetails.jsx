import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../apis/data";
import "./PostDetails.css";
import useAxios from "../../hooks/useAxios";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import AddForm from "../Form/AddForm";

const PostItem = () => {
  const [showAddComment, setShowAddComment] = useState(false);
  let { id } = useParams();

  const [post, error, loading, axiosFetchPost] = useAxios();
  const getPost = () => {
    axiosFetchPost({
      axiosInstance: axios,
      method: "get",
      url: `/posts/${id}`,
    });
  };

  const [image, imageError, imageLoading, axiosFetchImage] = useAxios();
  const getImage = () => {
    axiosFetchImage({
      axiosInstance: axios,
      method: "get",
      url: `/photos/${id}`,
    });
  };
  const [user, userError, userLoading, axiosFetchUser] = useAxios();
  const getUser = () => {
    axiosFetchUser({
      axiosInstance: axios,
      method: "get",
      url: `/users/${id}`,
    });
  };

  const [comments, commentError, commentLoading, axiosFetchComments] =
    useAxios();
  const getComments = () => {
    axiosFetchComments({
      axiosInstance: axios,
      method: "get",
      url: `posts/${id}/comments`,
    });
  };
  console.log(comments);

  let data = { ...post, ...image, ...user };
  useEffect(() => {
    getPost();
    getImage();
    getUser();
    getComments();
  }, []);
  const [axiosFetch] = useAxios();

  const handleSubmit = (data) => {
    axiosFetch({
      axiosInstance: axios,
      method: "post",
      url: "/posts",
      requestConfig: {
        data,
      },
    });
  };
const closeModal = () => {
  setShowAddComment(false)
}
  console.log(comments);

  return (
    <div className="details_page_container">
      <div className="post_item_container">
        <div className="post_item">
          <div className="post_item_img">
            <img src={data.url} alt="" />
          </div>
          <div className="post_item_author">
            <span>{data.name || ""}</span>
          </div>
          <div className="post_item_info">
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="comment_options">
          <h4 className="m-1  p-1">Comments</h4>
          <Button onClick={() => setShowAddComment(true)} variant="primary">
            Add Comment
          </Button>
        </div>
        {comments.map((comment) => (
          <Card style={{ width: "52rem" }} className="m-4">
            <Card.Header>{comment.name}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-1">
                <p>{comment.body}</p>
                <footer className="blockquote-footer m-1">
                  {comment.email}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
        {showAddComment && <AddForm onClose={closeModal}/>}
      </div>
    </div>
  );
};

export default PostItem;
