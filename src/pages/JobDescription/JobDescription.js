import React from 'react';
import { Container, Grid } from '@mui/material';
import { useEffect, useState } from "react";
import Job from './Job';

const JobDescription = () => {
    console.log('jobs');
    const [job, setJob] = useState([]);

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])

    return (

        <Container>
            <Grid container spacing={4}>
                {
                    job.map(details =>
                        <Job
                            key={details.key}
                            details={details}
                        ></Job>)
                }

            </Grid>
        </Container>
    );
};

export default JobDescription;