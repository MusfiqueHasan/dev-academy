import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
const InstructorUI = (props) => {
    const { instructor, experience, instructorImage } = props.instructor
    return (
        <div>
        {/* instructor UI */}
            <Card sx={{ maxWidth: 350, height: 500 }}>
                <CardMedia
                    component="img"
                    height="350"
                    image={instructorImage}
                    alt="image not found"
                />
                <CardContent>
                    <div className="instructor-description">
                        <div >
                            <h1 className="instructor-title">{instructor}</h1>
                        </div>
                        <p >{experience}</p>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
};

export default InstructorUI;