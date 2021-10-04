import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="menu-bar">
            <div>
                <NavLink className="site-title" to="/">de<span className="title-middle">VA</span>cademy</NavLink>
            </div>

            <div className="menu">
                <NavLink className="site-menu" to="/home">Home</NavLink>
                <NavLink className="site-menu" to="/about">About</NavLink>
                <NavLink className="site-menu" to="/course">Services</NavLink>
                <NavLink className="site-menu" to="/instructor">Instructor</NavLink>
               
            </div>


        </div>
    );
};

export default Header;