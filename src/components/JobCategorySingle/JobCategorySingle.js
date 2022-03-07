import { Grid, Typography } from '@mui/material';
import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const JobCategorySingle = ({ jobCategory }) => {
    return (
        <Grid item sx={{ flexGrow: 1, flexBasis: '50%' }}>
            <Grid container sx={{ alignItems: 'center' }}>
                <Grid item>
                    <ArrowRightIcon />
                </Grid>
                <Grid item
                >
                    <Typography
                        component='h4'
                        variant='h6'
                        onClick={() => {
                            console.log('hi');
                        }}
                        sx={{ cursor: 'pointer' }}
                    >
                        {jobCategory}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default JobCategorySingle;