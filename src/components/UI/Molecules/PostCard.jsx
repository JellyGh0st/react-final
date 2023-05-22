import React from "react";

const PostCard = ({ data }) => {
  const { title, question, answers } = data;

  return (
    <div className="post-card">
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
      )}
    </div>
  );
};

export default PostCard;