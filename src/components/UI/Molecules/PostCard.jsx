import { useContext } from "react";
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

      	<Link to={`/postPage/${id}`} className="custom-link" activeClassName="active" onClick={handlePostClick}>
    		<div className="post-text-area">
          	<h4>{title}:</h4>
          	<p>{question}</p>
        	</div>
      	</Link>

      	<div className="post-vote">
        		<button className="but-up">&#9650;</button>
        		<span>0</span>
        		<button className="but-down">&#9660;</button>
      	</div>
    </div>
  );
};

export default PostCard;
