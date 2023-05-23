import '../../styles/userPage.css';
import  { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const UsersProfile = () => {
  const { users } = useContext(UsersContext);

  // Assume you have a way to retrieve the logged-in user's ID or other unique identifier
  const loggedInUserId = 1;

  // Find the logged-in user in the users array
  const currentUser = users.find(user => user.id === loggedInUserId);

  return (
    <div>
      <h2>User Profile</h2>
      {currentUser && (
        <div>
          <h3>{currentUser.name}</h3>
          <p>Email: {currentUser.email}</p>
          <p>Role: {currentUser.role}</p>
          <img src={currentUser.avatarURL} alt={currentUser.name} />
        </div>
      )}
    </div>
  );
};

export default UsersProfile;
