import React from 'react';
import './login.css'

const Login = () => {
    return (
         <div className="login">
  <div className="main-container">
            <h3>Welcome Back</h3>

            <p className="invalid">Username or email is incorrect</p>
            <form action="" method="GET">
                <div>
                    <label for="email">Username or email</label>
                    <input type="text" name="email"></input>
                </div>

                <div>
                    <label for="password">Password</label>
                    <input type="text" name="password"></input>
                </div>
            </form>
            <a className="loginlink" href="#">Login</a>

            <div className="sign-up">
                <p>Don't have an account?</p>
                <a href="signup.ejs">Sign Up</a>

            </div>
        
        </div>
         </div>
          
    )
}



export default Login;