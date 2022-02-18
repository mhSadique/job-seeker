import { Card, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CourseOrEventSingle from '../../../../components/CourseOrEventSingle/CourseOrEventSingle';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/fakeDataCourses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <Card sx={{ p: 2, backgroundColor: '#f9f9fa' }}>
            <Typography component='h3' variant='h4' sx={{ mb: 2 }}>
                Courses
            </Typography>
            <Grid container sx={{ flexDirection: 'column' }}>
                <Grid item container sx={{ rowGap: 3 }}>
                    {courses.map(course => <CourseOrEventSingle course={course} />)}
                </Grid>
            </Grid>
            <Button
                sx={{ mt: 3 }}
                variant="contained"
                onClick={() => {
                    console.log('taking your to details page')
                }}
            >
                See all courses</Button>
        </Card>
    );
};

export default Courses;