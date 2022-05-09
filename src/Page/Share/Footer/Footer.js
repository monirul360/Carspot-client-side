import React from 'react';
import './Footer.css';
import logo from '../../../Image/Logo/logo.png';
import apple from '../../../Image/Footer/apple.png';
import google from '../../../Image/Footer/google.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="foooter-flex">
                        <div>
                            <img src={logo} height="40px" alt="" />
                            <p>We have all kinds of cars that you are looking for.Visit our site to find your favorite car</p>
                            <ul>
                                <li><Link to='/'><img src={apple} alt="" /></Link></li>
                                <li><Link to='/'><img src={google} alt="" /></Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Follow Us</h3>
                            <ul>
                                <li><Link to='/'>Facebook</Link></li>
                                <li><Link to='/'>Twitter</Link></li>
                                <li><Link to='/'>Linkedin</Link></li>
                                <li><Link to='/'>Google+</Link></li>
                            </ul>
                        </div>
                        <div className='quick_links'>
                            <h3> Quick Links </h3>
                            <ul>
                                <li><Link to='/'>About Us</Link></li>
                                <li><Link to='/'>Faqs</Link></li>
                                <li><Link to='/'>Packages</Link></li>
                                <li><Link to='/'>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Singup for Weekly Newsletter</h3>
                            <p>We may send you information about related events, webinars, products and services which we believe.</p>
                            <input type="text" name="email" placeholder='Enter your email' id="" />
                            <br />
                            <input type="submit" value="SUBMIT" />
                        </div>
                    </div>
                    <hr />
                    <p style={{ padding: '10px', textAlign: 'center' }}>&copy; 2022 Carspot All rights reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;