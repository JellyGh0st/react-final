import '../../styles/login.css'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersContext from '../../contexts/UsersContext';

const Login = () => {

  const { users, setCurrentUser} = useContext(UsersContext);
  const [formInputs, setFormInputs] = useState({ userName: '',password: ''});
  const [failedLogIn, setFailedLogIn] = useState(false);

  const navigate = useNavigate();

  const inputHandler = e =>{
    setFormInputs ({
      ...formInputs,
      [e.target.name]:e.target.value
    });
    setFailedLogIn(false);
  }

  const formSubmit = e => {
    e.preventDefault();
    const loggedInUser = users.find(user => user.name === formInputs.userName && user.password === formInputs.password);

    if(loggedInUser){
      setCurrentUser(loggedInUser)
      navigate('/forum');
    } else {
      setFailedLogIn(true);
    }
  }

  return (
    <main>
      <section id="login-main">
        <div>
        <h2>Login</h2>
          <form onSubmit={(e)=> {formSubmit(e)}}>
            <div>
              <label htmlFor="username">Username:</label>
              <input 
                type="text"
                name="userName" id="userName" 
                value={formInputs.userName}
                onChange={(e)=> {inputHandler(e)}}
                
                />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input 
              type="password" 
              name="password" id="password"
              value={formInputs.password}
              onChange={(e)=> {inputHandler(e)}}
              />
            </div>
            <input className='submit-input' type="submit" value="Log In"/>
          </form>
          {
            failedLogIn  && <h2>Neteisingos įvestys</h2>
          }
          
        </div>
      </section>
    </main>
  );
};

export default Login;
