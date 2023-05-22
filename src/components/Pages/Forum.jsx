import "../../styles/forum.css";
import PostCard from "../UI/Molecules/PostCard";
import { useContext } from "react";
import PostsContext from "../../contexts/PostsContext";

const Forum = () => {

  const { posts } = useContext(PostsContext); 

   return (
      <main>
         <section id="forum">
            <h1>Forum:</h1>
            <div>
               {
                  posts.map(post => 
                     <PostCard
                        key={post.id} 
                        data={post}
                     />

                  )       
                   
               }
            </div>
         </section>
    </main>
   );
};

export default Forum;
