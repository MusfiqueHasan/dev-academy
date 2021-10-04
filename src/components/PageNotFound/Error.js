import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css'
const Error = () => {
    return (
        <div className="error">
            <NavLink className="error-btn" to="/home">home page</NavLink>
        </div>
    );
};

export default Error;