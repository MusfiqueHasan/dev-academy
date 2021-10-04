import React from 'react';
import { Card, CardMedia } from '@mui/material';

const CourseUI = (props) => {

    const { courseName, courseDuration, courseTeacher, courseCategory, courseThumbnail, courseDescription } = props.course
    return (
        <div>
            <Card sx={{ maxWidth: 345, height: 450 }}>

                <CardMedia

                    component="img"
                    height="194"
                    image={courseThumbnail}
                    alt="Paella dish"
                />
                <div >
                    <h1 className="card-title">{courseName}</h1>
                </div>
                <div className="course-info">
                    <h5><span>{courseDuration} </span><span>{courseTeacher}</span> <span>{courseCategory}</span></h5>
                </div>
                <p className="course-description">{courseDescription}</p>


            </Card>
        </div>
    );
};

//  {/* <CardHeader
//                     
//                     title={courseName}
//                     subheader={courseDuration}
//                 />
//                 <CardHeader
//                     title={courseTeacher}
//                 />
//                 <CardContent>
//                     <Typography variant="body2" color="text.secondary">
//                         {/* {strInstructions.slice(0, 200)} */}
//                         </Typography>

//                         <button className="meal-btn" >Meal Details</button>
//                     </CardContent> */}

export default CourseUI;