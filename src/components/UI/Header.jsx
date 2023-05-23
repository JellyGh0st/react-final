import "../../styles/header.css";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { Link, NavLink } from "react-router-dom";


function Header() {

	const {currentUser} = useContext(UsersContext);

  

  	return (
    	<header>
      	<div className="header-nav">
        		<div className="header-logo">
          		<h3>BANDZOO</h3>
        		</div>

        		<nav className="header-links">
          		{ currentUser ? (
            		<>
              			<NavLink to="/" className="nav-link">Home</NavLink>
              			<NavLink to="/forum" className="nav-link">Forum</NavLink>
              			<NavLink to="/about" className="nav-link">About Us</NavLink>
              			<NavLink to="/contacts" className="nav-link">Contact</NavLink>
              			
            		</>
          			) 
						:
						(
						<>
					 		<NavLink to="/" className="nav-link">Home</NavLink>
					 		<NavLink to="/forum" className="nav-link">Forum</NavLink>
					 		<NavLink to="/about" className="nav-link">About Us</NavLink>
					 		<NavLink to="/contacts" className="nav-link">Contact</NavLink>
			  			</>
			  			)
					} 
        		</nav>

        		<div className="header-buttons">
          			 {	currentUser ? (
							<div className="logged-userhead">
							<div>
								<img src="" alt="" />
								<p>logged user</p>
							</div>
              			<button >Log out</button>
							</div>
            	
          			) 
						: 
						( 
              			<div className="sign-buttons">	
								<Link to="/login"><button>Log In</button></Link>
      						<Link to="/register"><button>Register</button></Link>
							</div>
          			 )
					} 
        		</div>
      	</div>
    	</header>

		
  	);
}

export default Header;
