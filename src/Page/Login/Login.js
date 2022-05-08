import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase';
import Social from '../Social/Social';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const emailBluer = e => {
        setEmail(e.target.value);
    }
    const passwordBluer = e => {
        setPassword(e.target.value);
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    if (user) {
        navigate(from, { replace: true });
    }
    const resetPassword = () => {
        if (email) {
            sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            sendPasswordResetEmail(email);
            toast('Please enter your email address');
        }
    }
    const signiUser = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <div className="login-container">
                <h2>Sign In To Your Account</h2>
                <div className="form-content">
                    <form onSubmit={signiUser} >
                        <label htmlFor="email"><p>Email</p></label>
                        <input type="email" onBlur={emailBluer} name="email" placeholder='Enter your email' id="email" />
                        <label htmlFor="password"><p>Password</p></label>
                        <input type="password" onBlur={passwordBluer} name="password" placeholder='Enter your password' id="password" />
                        {loading && <p>Loading...</p>}
                        <p style={{ color: 'red', padding: '7px' }}>{error?.message}</p>
                        <input type="submit" value="Login With Us" />
                    </form><br />
                    <p>Forget Password? <span
                        onClick={resetPassword}
                        id='reset-pass'>Reset Password</span>
                    </p>
                    <br />
                    <Link id='register-style' to='/register'>Create new account</Link>
                    <br />
                    <div className="flex-or">
                        <div></div>
                        <h3>OR</h3>
                        <div></div>
                    </div>
                    <Social></Social>
                </div>
            </div>
        </div>
    );
};

export default Login;