import React from 'react';
import './Login.css'

const Login = () => {
  return (
        <div className="center">
          <h1>Login</h1>
          <form method="post" onSubmit={(e) => {}}>
            <div className="txt_field">
              <input type="text" required />
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="Login" />
            <div className="signup_link">
              Haven't signed up yet? <a href="#">Register</a>
            </div>
          </form>
        </div>
  );
};

export default Login;
