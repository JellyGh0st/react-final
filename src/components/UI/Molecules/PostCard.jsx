import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UsersContext from "../../../contexts/UsersContext";
import "../../../styles/postCard.css";

const PostCard = ({ post, onClick }) => {

  const { users } = useContext(UsersContext);

  const { id, title, question, userId } = post;
  

  const user = users.find((user) => user.id === userId);
  const avatarURL = user ? user.avatarURL : "";

  const handlePostClick = () => {
    onClick(post);
  };

  return (
    <div className="post-card">
      <div className="avatar">
        <img src={avatarURL} alt="user photo" />
        <p>{user ? user.name : "Unknown author"}</p>
      </div>
      <Link to={`/postPage/${id}`} activeClassName="active" onClick={handlePostClick}>
        <div>
          <h4>{title}</h4>
          <p>{question}</p>
        </div>
      </Link>

      <div className="post-vote">
        <button>Upvote</button>
        <span>0</span>
        <button>Downvote</button>
      </div>
    </div>
  );
};

export default PostCard;
