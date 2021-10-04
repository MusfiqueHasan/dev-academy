import React from 'react';
import { NavLink } from 'react-router-dom';
import CourseUI from '../Course/CourseUI';
import useCourses from './../../hooks/useCourses';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Home.css'
const HomeTop = () => {
    const [courses] = useCourses(true);
    return (
        <>
            {/* home top section */}
            <section className="home-top">
                <div className="home-cover-title">
                    <h1 className="title-top">What is best for you</h1>
                    <h1 className="title-middle">Learning at deVAcademy</h1>
                    <h1 className="title-bottom">we take pride in serving our students safely</h1>
                    <NavLink to="/course" className="title-btn">Our Courses</NavLink>
                </div>
            </section>
            {/* site info */}
            <section className="details" >
                <div className="course-box">
                    <i className="fas fa-pencil-alt"></i>
                    <NavLink className="title" to="/course">Browse Courses</NavLink>
                    <p>By designing a site to be responsive, it will look good and work well no matter</p>
                </div>
                <div className="teacher-box">
                    <i className="fas fa-search"></i>
                    <NavLink className="title" to="/instructor">Find Instructor</NavLink>
                    <p>By designing a site to be responsive, it will look good and work well no matter</p>
                </div>
                <div className="certificate-box">
                    <i className="fas fa-certificate"></i>
                    <NavLink className="title" to="/certificate">Get Certification</NavLink>
                    <p>designing a site to be responsive, it will look good and work well no matter</p>
                </div>
            </section>
            {/* course section */}
            <section className="course-section">
                <div className="home-ui">
                    <div className="ui">
                        <h1 className="course-ui">Our Courses</h1>
                        <p className="course-ui-title">DEVACADEMY ALL COURSES</p>
                    </div>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                courses.map(course => <Grid item xs={2} sm={3} md={6} >
                                    <CourseUI key={course.id} course={course} />

                                </Grid>)
                            }

                        </Grid>
                    </Box>
                </div>

            </section>
        </>
    );
};

export default HomeTop;