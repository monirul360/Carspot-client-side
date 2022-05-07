import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';

const Register = () => {
    return (
        <div>
            <div className="login-container">
                <h2>Create Your Account</h2>
                <div className="form-content">
                    <form >
                        <label htmlFor="email"><p>Email</p></label>
                        <input type="email" name="email" placeholder='Enter your email' id="email" />
                        <label htmlFor="password"><p>Password</p></label>
                        <input type="password" name="password" placeholder='Enter your password' id="password" />
                        <input type="submit" value="Register" />
                    </form><br />
                    <Link id='register-style' to='/login'>Already have an account</Link>
                    <br />
                    <Social></Social>
                </div>
            </div>
        </div>
    );
};

export default Register;