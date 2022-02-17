import { Container, Grid } from '@mui/material';
import React from 'react';
import SearchBox from './SearchBox/SearchBox';
import Statistics from './Statistics/Statistics';


const HomePage = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container sx={{ flexDirection: 'column', gap: 5 }}>
                <Grid item>
                    <SearchBox />
                </Grid>
                <Grid item>
                    <Statistics />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;