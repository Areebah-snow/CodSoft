import React from 'react';

const Login = () => {
    return (
         
            <div class="main-container">
            <h3>Welcome Back</h3>

            <p class="invalid">Username or email is incorrect</p>
            <form action="" method="GET">
                <div>
                    <label for="email">Username or email</label>
                    <input type="text" name="email">
                </div>

                <div>
                    <label for="password">Password</label>
                    <input type="text" name="password">
                </div>
            </form>
            <a class="loginlink" href="#">Login</a>

            <div class="sign-up">
                <p>Don't have an account?</p>
                <a href="signup.ejs">Sign Up</a>

            </div>
        
        </div>
    )
}



export default Login;