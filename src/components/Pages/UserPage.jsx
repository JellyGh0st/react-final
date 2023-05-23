import '../../styles/userPage.css';
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const UsersProfile = () => {
  const { currentUser } = useContext(UsersContext);

  return (  

    <main>
      <div className="user-page">
        <h2>Profile:</h2>
        {currentUser ? (
          <div>
            <img src={currentUser.avatarURL} alt={currentUser.name} />
            <h3>{currentUser.name}</h3>
            <p>Email: {currentUser.email}</p>
            <p>Role: {currentUser.role}</p>
           </div>
          )
          : 
          (
          <p>No user logged in</p>
          )
        }
      </div>

    </main>

      
  );
};

export default UsersProfile;

