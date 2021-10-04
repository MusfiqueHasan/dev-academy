import React from 'react';
import img from '../../images/about.png'
import img1 from '../../images/about-1.png'
import './About.css'
const About = () => {
    return (
        <>
            <section className="about">
                <div className="about-left">
                    <div className="about-left-part">
                        <h1>ABOUT US</h1>
                        <p>A study of what constitutes rational human behavior in the endeavor to fulfill needs and wants. Thanks to this, you will understand the inter-related studies of</p>
                    </div>
                    <div className="about-left-part">
                        <h1>OUR MISSION & VISION</h1>
                        <p>A study of what constitutes rational human behavior in the endeavor to fulfill needs and wants. Thanks to this, you will understand the inter-related studies of</p>
                    </div>
                </div>
                <div>
                    <img width="440" src={img} alt="" />
                </div>
                <div>
                    <div className="about-right-part">
                        <h1>OUR STRATEGY</h1>
                        <p>A study of what constitutes rational human behavior in the endeavor to fulfill needs and wants. Thanks to this, you will understand the inter-related studies of</p>
                    </div>
                    <div className="about-right-part">
                        <h1>ABOUT US</h1>
                        <p>A study of what constitutes rational human behavior in the endeavor to fulfill needs and wants. Thanks to this, you will understand the inter-related studies of</p>
                    </div>
                </div>
            </section>
            <section className="about-bottom">
                <div>
                    <img width="440" src={img1} alt="" />

                </div>
                <div>
                <div className="about-bottom-details">
                    <h4>About Courses</h4>
                    <h1>We Provide Devloping Knowledge That Help You Succeed</h1>
                    <p>Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus. Phasellus magna erat, consectetur nec faucibus at, mollis vitae mauris.</p>
                </div>
                <div className="bottom">
                    <div className="bottom-details">
                        <h1><i className="fas fa-angle-double-right"></i> Seamless Management</h1>
                        <p>Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.</p>
                    </div>
                    <div className="bottom-details">
                        <h1><i className="fas fa-angle-double-right"></i> Flawless Incorporation</h1>
                        <p>Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.</p>
                    </div>
                </div>
                </div>
                
            </section>

        </>
    );
};

export default About;