// Course js
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CourseUI from './CourseUI';
import './Course.css'
import useCourses from './../../hooks/useCourses';
import CommonPage from '../CommonPage/CommonPage';
import { useHistory } from 'react-router';


const Course = () => {
    const [courses] = useCourses(false);
    const history = useHistory()
    const handleClick = (course) => {
        const {id,courseName, price, courseDuration, courseTeacher, courseCategory, courseDescription }= course;    
        
        history.push(`/courses/${id}/${courseName}/${courseDuration}/${courseTeacher}/${courseCategory}/${courseDescription}/${price}`)
        
    }
    return (
        <CommonPage title={`Courses`}>
            <div>
                {/* load course data */}
               <div className="course">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                courses.map(course => <Grid item xs={2} sm={3} md={4} >
                                    <CourseUI key={course.id} handleClick={handleClick} course={course} />
                                    
                                </Grid>)
                            }

                        </Grid>
                    </Box>
                </div>

            </div>
        </CommonPage>
    );
};

export default Course;