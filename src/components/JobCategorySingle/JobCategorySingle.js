import { Grid, Typography } from '@mui/material';
import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useHistory } from 'react-router-dom';

const JobCategorySingle = ({ jobCategory }) => {
    const history = useHistory();
    return (
        // <Grid item sx={{ flexGrow: 1, flexBasis: '50%' }}>
        <Grid item sx={{ flexGrow: 1 }}>
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
                            history.push(`/category-details/${jobCategory}`)
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