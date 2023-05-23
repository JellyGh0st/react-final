import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PostsContext from "../../contexts/PostsContext";
import Answer from "../UI/Molecules/Answer";

const QuestionPage = () => {
  const { postId } = useParams();
  const { posts } = useContext(PostsContext);

  // Find the selected post by postId
  const selectedPost = posts.find((post) => post.id === parseInt(postId));

  if (!selectedPost) {
    return <div>Loading...</div>;
  }

  const { title, question, answers } = selectedPost;

  return (
    <div className="question-page">
      <h2>{title}</h2>
      <p>{question}</p>

      <h3>Answers:</h3>
      <div className="answers">
        {answers.map((answer) => (
         <Answer
            key={answer.id}
            answer={answer}
         
         />

          
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;


