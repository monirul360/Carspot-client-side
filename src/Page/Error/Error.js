import React from 'react';
import error from '../../Image/Error/error.png';
import './Error.css';
const Error = () => {
    return (
        <>
            <div className="error-container">
                <img src={error} alt="" />
            </div>
        </>
    );
};

export default Error;