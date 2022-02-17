import React from 'react';
import Grid from '@mui/material/Grid';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import { Box, Typography } from '@mui/material';

const Statistics = () => {

    const iconStyle = {
        color: '#1976D2',
        fontSize: 63,
        fontWeight: 700,
        mr: 2
    };

    return (
        <Grid container xs={{}}>
            <Grid item sx={{ flexGrow: 1 }}>
                <Grid container>
                    <StackedLineChartIcon sx={iconStyle} />
                    <Box>
                        <Typography component='h2' variant='h5'>
                            Live Jobs
                        </Typography>

                        <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold' }}>
                            5346 {/* Taken form database later ******/}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
                <Grid container>
                    <PersonSearchIcon sx={iconStyle} />
                    <Box>
                        <Typography component='h2' variant='h5'>
                            Vacancies
                        </Typography>
                        <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold' }}>
                            5346 {/* Taken form database later ******/}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
                <Grid container>
                    <ApartmentIcon sx={iconStyle} />
                    <Box>
                        <Typography component='h2' variant='h5'>
                            Companies
                        </Typography>
                        <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold' }}>
                            5346 {/* Taken form database later ******/}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
                <Grid container>
                    <HighlightAltIcon sx={iconStyle} />
                    <Box>
                        <Typography component='h2' variant='h5'>
                            New Jobs
                        </Typography>
                        <Typography component='h2' variant='h5' sx={{ fontWeight: 'bold' }}>
                            5346 {/* Taken form database later ******/}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Statistics;