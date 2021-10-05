// Footer js
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-in">
            {/* Get in touch */}
                <div className="get-in-touch">
                    <h1>GET IN TOUCH</h1>
                    <hr />
                    <div className="address">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>G5 Technology JSC, Room 1101, Glory Palace Apartment, Truong Thi Ward, Vinh City, Nghe An Province, Bangladesh(42000).</p>
                    </div>
                    <div className="address">
                        <i class="fas fa-phone"></i>
                        <p>(+84) 388-969-888</p>
                    </div>
                    <div className="address">
                        <i class="fas fa-envelope"></i>
                        <p>musfiquehasan08@gmail.com</p>
                    </div>

                </div>
                {/* ask qus */}
                <div className="ask-qus">
                    <h1>ASK A QUESTION</h1>
                    <input type="text" name="" id="" placeholder="EMALL ADDRESS" />
                    <input type="text" name="" id="" placeholder="QUESTION" />
                    <input type="button" value="submit" />
                    
                </div>
            </div>
            {/* copy right */}
            <p className="footer-copyright">© 2021 deVAcademy All Rights Reserved.</p>

        </div>
    );
};

export default Footer;