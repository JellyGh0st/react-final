import "../../styles/header.css";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { Link, NavLink, useNavigate } from "react-router-dom";


function Header() {

	const {currentUser, setCurrentUser} = useContext(UsersContext);
	const navigate =  useNavigate();

  

  	return (
    	<header>
      	<div className="header-nav">
        		<div className="header-logo">
          		<h3>BANDZOO</h3>
        		</div>

        		<nav className="header-links">
          		{ currentUser ? 
            		<>
              			<NavLink to="/" className="nav-link">Home</NavLink>
              			<NavLink to="/forum" className="nav-link">Forum</NavLink>
              			<NavLink to="/about" className="nav-link">About Us</NavLink>
              			<NavLink to="/contacts" className="nav-link">Contact</NavLink>
            		</>
						:
						<>
					 		<NavLink to="/" className="nav-link">Home</NavLink>
					 		<NavLink to="/forum" className="nav-link">Forum</NavLink>
					 		<NavLink to="/about" className="nav-link">About Us</NavLink>
					 		<NavLink to="/contacts" className="nav-link">Contact</NavLink>
			  			</>
			  			
					} 
        		</nav>

        		<div className="header-state">
          			{currentUser ?
							<div className="logged-yes-user">
								<div>
									<p>user:</p>
									<p className='darker'>{currentUser.name}</p>
								</div>
								<Link to="/userPage">
									<img src={currentUser.avatarURL} alt="current user" />
								</Link>
								<button onClick={()=> {
										setCurrentUser(null);
										navigate('/')
								}}>Log Out</button>
							</div>
							: 
              			<div className="logged-not">	
								<Link to="/login"><button>Log In</button></Link>
      						<Link to="/register"><button>Register</button></Link>
							</div>
          			} 
        		</div>
      	</div>
    	</header>

		
  	);
}

export default Header;
