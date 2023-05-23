import React from "react";
import "../../../styles/postCard.css";
import { NavLink } from "react-router-dom";

const PostCard = ({ post, users }) => {
  const { title, question, answers, userId } = post;

  const user = users.find((user) => user.id === userId);
  const avatarURL = user ? user.avatarURL : "";

  return (
    <div className="post-card">
      <div className="avatar">
        <img src={avatarURL} alt="user photo" />
        <p>author</p>
      </div>
      <NavLink to="/postPage" activeClassName="active">
      <div>
        <h4>{title}</h4>
        <p>{question}</p>
        {answers.length > 0 && (
          <div className="answers">
            <h4>Answers:</h4>
            <div>
              {answers.map((answer) => (
                <p key={answer.id}>{answer.content}</p>
              ))}
            </div>
          </div>
          )
        }
      </div>
      </NavLink>
      <div className="post-vote">
        <button>Upvote</button>
        <span>0</span>
        <button>Downvote</button>
      </div>
    </div>
  );
};

export default PostCard;
