import  { useContext } from "react";
import "../../../styles/answer.css";
import UsersContext from "../../../contexts/UsersContext";

const Answer = ({ answer }) => {
  const { users } = useContext(UsersContext);
  const answerAuthor = users.find((user) => user.id === answer.userId);

  return (
    <div key={answer.id} className="answer">
      <h4>Author: {answerAuthor ? answerAuthor.name : "Unknown"}</h4>
      <p>{answer.title}</p>
      <p>{answer.content}</p>
      
      {/* <div className="votes">
        <span>Upvotes: {answer.upvotes}</span>
        <span>Downvotes: {answer.downvotes}</span>
      </div> */}
    </div>
  );
};

export default Answer;