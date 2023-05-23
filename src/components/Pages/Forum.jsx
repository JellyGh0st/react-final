import "../../styles/forum.css";
import PostCard from "../UI/Molecules/PostCard";
import { useContext } from "react";
import PostsContext from "../../contexts/PostsContext";
import UsersContext from "../../contexts/UsersContext";

const Forum = () => {

  const { posts } = useContext(PostsContext);
  const { users } = useContext(UsersContext);

  return (
      <main>
         <section id="forum">
            <div id="forum-posts">
               <h2>General discussion:</h2>

               <div className="user-cards">
                  {  posts.map((post) => (
                     <PostCard 
                        key={post.id} 
                        post={post}
                        users={users} 
                     />
                  ))
                  }  
               </div>

            </div>
         </section>
      </main>
   );
};

export default Forum;