import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>
            Login
          </button>
          <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>
            Signup
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#" style={{margin: '15px 0'}}>Forgot Password?</a>
              <button>Login</button>
              <p>
                Not a Member? <a href="#">Signup Now</a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Signup Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button>Signup</button>
              <p>
                Already a Member? <a href="#">Go to Login Page</a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
