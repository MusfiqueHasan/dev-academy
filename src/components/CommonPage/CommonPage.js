import React from 'react';
import { NavLink } from 'react-router-dom';
import './CommonPage.css'
const CommonPage = (props) => {
    return (
        <>
            <div className="common-page">
                <div className="common-title-inner">
                    <h1>{props.title}</h1>
                </div>
                <div className="common-dynamic-inner">
                    <NavLink to="/home" className="home-icon"><i className="fas fa-home"></i></NavLink>
                    <i className="fas fa-angle-double-right home-icon"></i>
                    {props.prevTitle && (<div className="common-dynamic"><h1>{props.prevTitle}</h1>
                     <i className="fas fa-angle-double-right home-icon"></i> </div>)}
                    <h1>{props.title}</h1>

                </div>
            </div>
            <div>
                {props.children}

            </div>
        </>
    );
};

export default CommonPage;
