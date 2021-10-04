import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState } from "react";

import './Instructor.css'
import InstructorUI from './InstructorUI';
import useInstructor from './../../hooks/useInstructor';
const Instructor = () => {
   const [instructors]=useInstructor()
    return (
        <div>
            <div className="instructor">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            instructors.map(instructor => <Grid item xs={2} sm={3} md={3} >
                                <InstructorUI key={instructor.id} instructor={instructor} />

                            </Grid>)
                        }

                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default Instructor;