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

        <div className="header-links">
          {isLoggedIn ? (
            <>
              <NavLink to="/" >Home</NavLink>
              <NavLink to="/contacts" >Contacts</NavLink>
              <NavLink to="/about" >About</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" >Home</NavLink>
            </>
          )}
        </div>

        <div className="header-buttons">
          {isLoggedIn ? (
            <>
              {/* Additional buttons for logged-in users */}
              <button onClick={handleLogout}>Log out</button>
            </>
          ) : (
            <>
              <NavLink to="/login"><button>Log in</button></NavLink> 
              <NavLink to="/register"><button>Sign in</button></NavLink> 
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;