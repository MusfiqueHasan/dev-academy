import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'
const HomeTop = () => {
    return (
        <>
            <div className="home-top">
                <div className="home-cover-title">
                    <h1 className="title-top">What is best for you</h1>
                    <h1 className="title-middle">Learning at deVAcademy</h1>
                    <h1 className="title-bottom">we take pride in serving our students safely</h1>
                    <NavLink to="/course" className="title-btn">Our Courses</NavLink>
                </div>
            </div>
            <div className="details" >
                <div className="course-box">
                    <i className="fas fa-pencil-alt"></i>
                    <NavLink className="title" to="/course">Browse Courses</NavLink>    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquam!</p>
                </div>
                <div className="teacher-box">
                    <i className="fas fa-search"></i>
                    <NavLink className="title" to="/teacher">Find Instructor</NavLink>                      
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquam!</p>
                </div>
                <div className="certificate-box">
                    <i className="fas fa-certificate"></i>
                    <NavLink className="title" to="/certificate">Get Certification</NavLink>                   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquam!</p>
                </div>
            </div>
        </>
    );
};

export default HomeTop;