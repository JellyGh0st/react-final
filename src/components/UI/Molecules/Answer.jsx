const Answer = (answer) => {
   return ( 
      <div key={answer.id} className="answer">
            <p>{answer.content}</p>
            <div className="votes">
              <span>Upvotes: {answer.upvotes}</span>
              <span>Downvotes: {answer.downvotes}</span>
            </div>
      </div>
   );
}
 
export default Answer;