import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CourseUI from './CourseUI';
import './Course.css'
const Course = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const url = `./Course.JSON`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>

            <div className="course">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md:4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            courses.map(course => <Grid item xs={2} sm={3} md={4} >
                                <CourseUI course={course} />
                            </Grid>)
                        }

                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default Course;