import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';

const CourseUI = (props) => {

    const { courseName, courseDuration, courseTeacher, courseCategory, courseThumbnail, courseDescription } = props.course
    return (
        <div>
        {/* Course ui */}
            <Card sx={{ maxWidth: 450, height:480 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={courseThumbnail}
                    alt="Paella dish"
                />
                <CardContent>
                    <div >
                        <h1 className="card-title">{courseName}</h1>
                    </div>
                    <div className="course-info">
                        <h5>
                        <span><i className="fas fa-calendar-alt"></i> {courseDuration} </span>
                        <span><i className="fas fa-user"></i> {courseTeacher}</span> 
                        <span><i className="fas fa-graduation-cap"></i> {courseCategory}</span></h5>
                    </div>
                    <p className="course-description">{courseDescription}</p>
                    <button className="course-btn">Course Details</button>
                </CardContent>
            </Card>
        </div>
    );
};


export default CourseUI;