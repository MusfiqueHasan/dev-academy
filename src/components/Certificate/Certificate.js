import React from 'react';
import CommonPage from '../CommonPage/CommonPage';
import { Card } from '@mui/material';
import './Certificate.css'
const Certificate = () => {
    return (
        <CommonPage title={'certificate'}>
            <div className="certificate-details">

                <Card sx={{ maxWidth: 450, height: 350 }}>
                    <div className="certificate">
                        <i className="fas fa-certificate"></i>
                        <p >You have not taken the course yet. <br /> If you complete any course from DEVACADEMY you will be given a certificate according to your performance</p>
                    </div>
                </Card>


            </div>
        </CommonPage>
    );
};

export default Certificate;
