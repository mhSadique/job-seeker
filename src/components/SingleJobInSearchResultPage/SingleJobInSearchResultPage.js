import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

const SingleJobInSearchResultPage = ({ job }) => {
    console.log(job);
    const history = useHistory();
    return (
        <Grid
            item
            sx={[{
                flexGrow: 1,
                flexBasis: '48%',
                backgroundColor: '#DEE8F3',
                p: 2,
                borderRadius: 2,
                cursor: 'pointer',
                borderColor: '#a0a0e7',
                borderWidth: '1px',
                borderStyle: 'solid',

            },
            {
                '&:hover': {
                    backgroundColor: '#cdcde0'
                }
            }]}
            onClick={() => {
                history.push(`/job-description/${job._id}`);
            }}
        >
            <Grid item>
                <Typography
                    component='h4'
                    variant='h4'
                    sx={{ color: '#338033' }}
                >{job.jobTitle}</Typography>
            </Grid>
            <Grid item>
                <Typography
                    component='h6'
                    variant='h6'
                >{job.jobCategory}</Typography>
            </Grid>
            <Grid item>
                <Typography
                    component='h6'
                    variant='h6'
                >Vacancy: {job.jobVacancy}</Typography>
            </Grid>
        </Grid>
    );
};

export default SingleJobInSearchResultPage;