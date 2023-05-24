import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import UsersContext, { UsersActionTypes } from "../../contexts/UsersContext";
import "../../styles/register.css"

const Register = () => {
  const { setUsers } = useContext(UsersContext);
  const [formInputs, setFormInputs] = useState({
    username: "",
    password: "",
    email: "",
    avatarURL: "",
  });
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuidv4(),
      name: formInputs.username,
      password: formInputs.password,
      role: "user",
      email: formInputs.email,
      avatarURL: formInputs.avatarURL,
    };

    fetch("http://localhost:8080/users", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        
        setUsers({
          type: UsersActionTypes.get,
          data: data,
        });

        
        navigate("/login");
      })
      .catch((error) => {
        
        console.error("Error:", error);
      });
  };

  return (
    <main>
      <section id="register-main">
        <div>
          <h2>Register</h2>
          <form onSubmit={formSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formInputs.username}
                onChange={inputHandler}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formInputs.password}
                onChange={inputHandler}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formInputs.email}
                onChange={inputHandler}
              />
            </div>
            <div>
              <label htmlFor="avatarURL">Avatar URL:</label>
              <input
                type="text"
                id="avatarURL"
                name="avatarURL"
                value={formInputs.avatarURL}
                onChange={inputHandler}
              />
            </div>
            <button className='submit-input'  type="submit">Register</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;