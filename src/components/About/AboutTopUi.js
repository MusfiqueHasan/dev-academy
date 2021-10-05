import React from 'react';
import img from '../../images/about.png'
const AboutTopUi = () => {
    return (
        <div>
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
                <div className="image">
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
        </div>
    );
};

export default AboutTopUi;