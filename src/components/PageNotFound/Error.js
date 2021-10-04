import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css'
const Error = () => {
    return (
        <div className="error">
        {/* Error UI */}
            <NavLink className="error-btn" to="/home">home page</NavLink>
        </div>
    );
};

export default Error;