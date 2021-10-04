// Course js
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CourseUI from './CourseUI';
import './Course.css'
import useCourses from './../../hooks/useCourses';

const Course = () => {
    const [courses] = useCourses(false);
    return (
        <div>
            {/* load course data */}
            <div className="course">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            courses.map(course => <Grid item xs={2} sm={3} md={4} >
                                <CourseUI key={course.id} course={course} />

                            </Grid>)
                        }

                    </Grid>
                </Box>
            </div>


        </div>
    );
};

export default Course;