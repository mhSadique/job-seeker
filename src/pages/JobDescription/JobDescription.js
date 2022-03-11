import React from 'react';
import { Container, Grid } from '@mui/material';
import { useEffect, useState } from "react";
import Job from './Job';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const JobDescription = () => {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [job, setJob] = useState({});
    console.log(job);

    useEffect(() => {
        fetch(`https://cryptic-retreat-93579.herokuapp.com/api/jobs/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setJob(data.jobs);
            })
    }, [id])

    return (

        <Container>
            {!loading
                ?
                <Grid container sx={{ mt: 3, minHeight: '90vh' }}>
                    {job._id && <Job key={job._id} id={id}
                        details={job}
                    />}

                </Grid>
                :
                <h2>Loading...</h2>}
        </Container>
    );
};

export default JobDescription;