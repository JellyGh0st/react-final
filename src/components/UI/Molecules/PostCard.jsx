const PostCard = ({data}) => {


   return ( 
      <div>
         <p>{data.title}</p>
         <p>{data.question}</p>
         
      </div> 
   );
}
 
export default PostCard;