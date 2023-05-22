import "../../styles/forum.css";
import PostCard from "../UI/Molecules/PostCard";
import { useContext } from "react";
import PostsContext from "../../contexts/PostsContext";

const Forum = () => {
  const { posts } = useContext(PostsContext);

  return (
    <main>
      <section id="forum">
        <div id="forum-right">
          <h1>General discussion:</h1>
          <div className="user-cards">
            {posts.map((post) => (
              <PostCard key={post.id} data={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Forum;