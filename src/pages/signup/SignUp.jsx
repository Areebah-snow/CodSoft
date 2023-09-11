import React from 'react';
import '../login/login.css'

const SignUp = () => {
    return (
        <div className="login">
  <div class="main-container">
        <h3>Create Account</h3>
        <form action="" onsubmit="Submit" method="POST">
            <div>
                <label for="firstName">First Name</label>
                <input type="text" name="firstName"/>
            </div>

            <div>
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName"/>
            </div>

            <div>
                <label for="email">Email</label>
                <input type="text" name="email"/>
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" name="password"/>
            </div>

            
            {/* <!-- <div>
                <label for="">Confirm Password</label>
                <input type="password">
            </div> --> */}
        </form>
        <a class="loginlink" href="#">Sign Up</a>

        <div class="sign-up">
            <p>Already have an account?</p>
            <a href="login.html">Login</a>
    
        </div>
       
    </div>
        </div>
      
    )
}


export default SignUp;