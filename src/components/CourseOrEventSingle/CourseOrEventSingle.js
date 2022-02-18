import { Grid, Typography, Paper } from '@mui/material';
import React from 'react';

const CourseOrEventSingle = ({ course }) => {
    return (
        <Paper sx={{
            width: '100%',
            p: 2,
            cursor: 'pointer',
            backgroundColor: '#dee8f3'
        }}
            onClick={() => {
                console.log('clicked');
            }}
        >
            <Grid
                item
                container
                sx={{
                    flexDirection: 'column',
                }}>
                <Grid item>
                    <Typography
                        component='h5'
                        variant='h5'
                    >
                        {course.courseName}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        component='h5'
                        variant='h6'
                    >
                        {course.date}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CourseOrEventSingle;