import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase';
import logo from '../../../Image/Logo/logo.png';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
    }
    function navToggle() {
        const navToggler = document.querySelector(".nav-toggler");
        navToggler.classList.toggle("active");
        const nav = document.querySelector(".nav");
        nav.classList.toggle("open");
        if (nav.classList.contains("open")) {
            nav.style.maxHeight = nav.scrollHeight + "px";
        }
        else {
            nav.removeAttribute("style");
        }
    }
    return (
        <div>
            <header class="header">
                <div class="header-container">
                    <div class="row align-items-center justify-content-between">
                        <div class="logo">
                            <Link to='/'><img src={logo} height="40px" alt="" /></Link>
                        </div>
                        <button onClick={navToggle} type="button" class="nav-toggler">
                            <span></span>
                        </button>
                        <nav class="nav">
                            <ul>
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                {user ?
                                    <>
                                        <li><Link to='Manage'>Manage Items</Link></li>
                                        <li><Link to='additem'>Add Item</Link></li>
                                        <li><Link to='myitems'>My items</Link></li>
                                        <li id='logout' onClick={logout}>Log out</li>
                                    </>
                                    :
                                    <li><Link to='/login'>Login</Link></li>
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </header >
        </div >
    );
};

export default Header;