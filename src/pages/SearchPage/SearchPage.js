import { Paper, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleJobInSearchResultPage from '../../components/SingleJobInSearchResultPage/SingleJobInSearchResultPage';

const SearchPage = () => {
    const { searchText } = useParams();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`https://cryptic-retreat-93579.herokuapp.com/api/jobs?keyword=${searchText}`)
            .then(res => res.json())
            .then(data => setJobs(data.allJobs));
    }, [searchText]);

    return (
        jobs.length && <Container sx={{ minHeight: '90vh' }}>
            <Paper
                elevation={0}
                sx={{ mt: 2 }}>
                <Typography
                    component='body'
                    variant='h6'
                    sx={{ pl: 2, fontWeight: '600' }}
                >
                    Showing search result for: {searchText} {`(${jobs.length} ${jobs.length > 1 ? 'results' : 'result'})`}
                </Typography>
                <Grid
                    container
                    sx={{ p: 2, flexWrap: 'wrap', gap: 2 }}>
                    {jobs.map(job => (
                        <>
                            <SingleJobInSearchResultPage job={job} />
                        </>
                    ))}
                </Grid>
            </Paper>
        </Container>
    );
};

export default SearchPage;