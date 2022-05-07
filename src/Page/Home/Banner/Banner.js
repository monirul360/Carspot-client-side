import React from 'react';
import './Banner.css';
import banner from '../../../Image/Banner/Banner-1.png';
const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;