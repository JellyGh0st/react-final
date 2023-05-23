import React, { useContext, useState } from "react";
import PostCard from "../UI/Molecules/PostCard";
import QuestionPage from "../Pages/QuestionPage";
import PostsContext from "../../contexts/PostsContext";
import "../../styles/forum.css";

const Forum = () => {
  const { posts } = useContext(PostsContext);
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <main>
      <section id="forum">
        <div id="forum-posts">
          <h2>General discussion:</h2>

          <div className="user-cards">
            {posts.map((post) => (
               <PostCard 
                  key={post.id} 
                  post={post} 
                  onClick={handlePostClick} />
            ))}
          </div>
        </div>
      </section>

      {selectedPost && <QuestionPage post={selectedPost} />}
    </main>
  );
};

export default Forum;
