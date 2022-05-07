import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import Social from '../Social/Social';

const Register = () => {
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
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (user) {
        navigate(from, { replace: true });
    }
    const createUser = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div className="login-container">
                <h2>Create Your Account</h2>
                <div className="form-content">
                    <form onSubmit={createUser}>
                        <label htmlFor="name"><p>Name</p></label>
                        <input type="text" name="name" placeholder='Your name' id="name" />
                        <label htmlFor="email"><p>Email</p></label>
                        <input type="email" onBlur={emailBluer} name="email" placeholder='Enter your email' id="email" />
                        <label htmlFor="password"><p>Password</p></label>
                        <input type="password" onBlur={passwordBluer} name="password" placeholder='Enter your password' id="password" />
                        {loading && <p>Loading...</p>}
                        <p style={{ color: 'red', padding: '7px' }}>{error?.message}</p>
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