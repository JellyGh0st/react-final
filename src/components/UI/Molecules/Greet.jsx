import "../../../styles/greet.css";
import { Link } from 'react-router-dom';

const Greet = () => {

   return ( 
      <div className="greet-box">

         <div className="greet-text">
            <h2>WELCOME</h2>
            <p>Register and join our community to find the all the answers You seek!</p>
         </div>
        
         <Link to="/register">
            <button>Join our community</button>
         </Link>
         
         
      </div>

   );
}
 
export default Greet;