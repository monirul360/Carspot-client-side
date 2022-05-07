import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>

            <div className="login-container">
                <h2>Sign In To Your Account</h2>
                <div className="form-content">
                    <form >
                        <label htmlFor="email"><p>Email</p></label>
                        <input type="email" name="email" placeholder='Enter your email' id="email" />
                        <label htmlFor="password"><p>Password</p></label>
                        <input type="password" name="password" placeholder='Enter your password' id="password" />
                        <input type="submit" value="Login With Us" />
                    </form><br />
                    <Link id='register-style' to='/login'>Create new account</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;