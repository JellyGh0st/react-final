import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PostsContext from "../../contexts/PostsContext";
import Answer from "../UI/Molecules/Answer";
import "../../styles/questionPage.css";

const QuestionPage = () => {
  const { postId } = useParams();
  const { posts } = useContext(PostsContext);

  const selectedPost = posts.find((post) => post.id === parseInt(postId));

  const { title, question, answers } = selectedPost;

  return (
    <main>
      <div className="question-page">
        <div>
          <h2>{title}</h2>
          <p>{question}</p>
        </div>

        <h3>Answers:</h3>
        <div className="answers">
          {answers.map((answer) => (
            <Answer key={answer.id} answer={answer} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default QuestionPage;
