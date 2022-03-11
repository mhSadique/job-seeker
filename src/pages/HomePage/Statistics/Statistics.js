import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import { Box, Paper, Typography } from '@mui/material';

const Statistics = () => {
    const [jobs, setJobs] = useState(0);
    const [categories, setCategories] = useState(0);
    useEffect(() => {
        fetch('https://cryptic-retreat-93579.herokuapp.com/api/getAll/jobs')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setJobs(data.getAllJobs.length);
                }
            })
    }, [])

    useEffect(() => {
        fetch('https://cryptic-retreat-93579.herokuapp.com/api/getAll/category')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setCategories(data.getAllCategory.length);
                }
            })
    }, [])

    const iconStyle = {
        color: '#1976D2',
        fontSize: 63,
        fontWeight: 700,
        mr: 2
    };

    return (
        <Paper sx={{ p: 2 }} elevation={4}>
            <Grid container sx={{}}>
                <Grid item sx={{ flexGrow: 1, my: 2 }} sm={6} md={3}>
                    <Grid container>
                        <StackedLineChartIcon sx={iconStyle} />
                        <Box>
                            <Typography component='h2' variant='h5'>
                                Live Jobs
                            </Typography>

                            <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold' }}>
                                {jobs}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item sx={{ flexGrow: 1, my: 2 }} sm={6} md={3}>
                    <Grid container>
                        <PersonSearchIcon sx={iconStyle} />
                        <Box>
                            <Typography component='h2' variant='h5'>
                                Vacancies
                            </Typography>
                            <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold' }}>
                                {jobs}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item sx={{ flexGrow: 1, my: 2 }} sm={6} md={3}>
                    <Grid container>
                        <ApartmentIcon sx={iconStyle} />
                        <Box>
                            <Typography component='h2' variant='h5'>
                                Companies
                            </Typography>
                            <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold' }}>
                                {categories}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item sx={{ flexGrow: 1, my: 2 }} sm={6} md={3}>
                    <Grid container>
                        <HighlightAltIcon sx={iconStyle} />
                        <Box>
                            <Typography component='h2' variant='h5'>
                                New Jobs
                            </Typography>
                            <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold' }}>
                                {jobs}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Statistics;