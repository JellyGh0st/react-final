import "../../styles/header.css"
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";

function Header() {

  const { isLoggedIn, handleLogout } = useContext(LoginContext);

  return (

    <header>
      <div className="header-nav">
        <div className="header-logo">
          <h3>BANDZOO</h3>
        </div>

        <nav className="header-links">
          {isLoggedIn ? (
            <>
              
              <NavLink to="/" className="nav-link" >Home</NavLink>
              <NavLink to="/forum" className="nav-link" >Forum</NavLink>
              <NavLink to="/about" className="nav-link" >About Us</NavLink>
              <NavLink to="/contacts" className="nav-link" >Contact</NavLink>
              <NavLink to="/userPage" className="nav-link" >User</NavLink>
            </>
          ) 
          : 
          (
            <>
              <NavLink to="/" className="nav-link" >Home</NavLink>
              <NavLink to="/forum" className="nav-link" >Forum</NavLink>
              <NavLink to="/about" className="nav-link" >About Us</NavLink>
              <NavLink to="/contacts" className="nav-link" >Contact</NavLink>
              <NavLink to="/userPage" className="nav-link" >User</NavLink>
              
            </>
          )}
        </nav>

        <div className="header-buttons">
          {isLoggedIn ? (
            <>
              
            <button onClick={handleLogout}>Log out</button>
            </>
          ) : (
            <>
              <NavLink to="/login"><button>Log In</button></NavLink> 
              <NavLink to="/register"><button>Register</button></NavLink> 
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;