import React from 'react';
import './Social.css';
import google from '../../Image/Social/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import { useNavigate } from 'react-router-dom';
const Social = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

    if (googleuser) {
        navigate("/");
    }
    return (
        <div>
            <div className="eror-container">
                {googleloading && <p>Loading....</p>}
                <p>{googleerror?.message}</p>
            </div>
            <div className="social-container">
                <div>
                    <button onClick={() => signInWithGoogle()}>
                        <img src={google} alt="" />
                        <span> Google Sign In</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Social;