import '../../styles/login.css'

const Login = () => {
  return (
    <main>
      <section id="login-main">
        <div>
          <h2>Login</h2>
          <form>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value="" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value="" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
