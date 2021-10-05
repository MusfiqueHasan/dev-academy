import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Avatar, Card, CardContent, CardHeader } from '@mui/material';
import { orange } from '@mui/material/colors';
import { useParams } from 'react-router';
import CommonPage from '../CommonPage/CommonPage';
import { useHistory } from 'react-router';

const SingleCourseUI = () => {
    const history = useHistory()
    const { id, cn, cd, ct, cc, ctb, price } = useParams();
    const handleBack = () => {
        history.push('/course')
    }
    return (
        <CommonPage title={`Course Details`} prevTitle={`Courses`}>
            <div className="single-details">

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Card sx={{ maxWidth: 450, height: 350 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                                        {id}
                                    </Avatar>
                                }
                            />
                            <CardContent>
                                <div >
                                    <h1 className="card-title">{cn}</h1>
                                </div>
                                <div className="course-info">
                                    <h5>
                                        <span><i className="fas fa-calendar-alt"></i> {cd} </span>
                                        <span><i className="fas fa-user"></i> {ct}</span>
                                        <span><i className="fas fa-graduation-cap"></i> {cc}</span>
                                        <span><i class="fas fa-dollar-sign"></i> {price}</span>
                                    </h5>
                                </div>
                                <p className="course-description">{ctb}</p>
                                <button className="course-btn" onClick={handleBack} >See all Courses</button>
                            </CardContent>
                        </Card>

                    </Grid>
                </Box>
                <div className="details-more">
                    <h1>{cn}</h1>
                    <p><span>Details:</span> <span className="info-details">{ctb}</span></p>
                    <p><span>Category:</span> <span className="info">{cc}</span></p>
                    <p><span>Instructor:</span> <span className="info">{ct}</span></p>
                    <p><span>Price: </span> <span className="info">${price}</span></p>
                </div>
            </div>
        </CommonPage>
    );
};

export default SingleCourseUI;