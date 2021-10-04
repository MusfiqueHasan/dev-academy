import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Home.css'
import HomeTop from './HomeTop';

const Home = () => {
    
    return (
        <div className="home">
            <div>
               <HomeTop/>                         
            </div>
        </div>
    );
};

export default Home;