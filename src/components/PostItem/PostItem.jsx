import { Link } from "react-router-dom";
import "./PostItem.css";

const PostItem = ({ title, body, id, picture, name }) => {
  console.log(picture);

  return (
    <div className="post_item_container">
      <div className="post_item">
        <div className="post_item_img">
          <img src={picture} alt="" />
        </div>
        <div className="post_item_author">
          <span>by. {name || ""}</span>
        </div>
        <div className="post_item_info">
          <h1>{title}</h1>
          <p>{body}</p>

          <a className="post_item_more">
            <Link to={`/posts/${id}`}>Read More</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
