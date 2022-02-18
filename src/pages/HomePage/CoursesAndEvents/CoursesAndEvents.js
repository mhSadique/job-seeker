import { Grid } from '@mui/material';
import React from 'react';
import Courses from './Courses/Courses';
import Events from './Events/Events';

const CoursesAndEvents = () => {
    return (
        <Grid container sx={{ columnGap: 3 }}>
            <Grid item sx={{ flexBasis: '48%' }}>
                <Courses />
            </Grid>
            <Grid item sx={{ flexBasis: '48%' }}>
                <Events />
            </Grid>
        </Grid>
    );
};

export default CoursesAndEvents;