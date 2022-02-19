import { Paper, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SearchPage = () => {
    const history = useHistory();
    const { searchText } = useParams();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`https://cryptic-retreat-93579.herokuapp.com/api/jobs?keyword=${searchText}`)
            .then(res => res.json())
            .then(data => setJobs(data.allJobs))
    }, [searchText]);
    console.log(jobs);
    return (
        <Container>
            <Paper>
                <h1>This is Search Result page </h1>
                <h2>The search text is: {searchText}</h2>
                <ul>
                    {jobs.map(job => (
                        <>
                            <li>{job._id}</li>
                            <button
                                onClick={() => {
                                    history.push(`/job-description/${job._id}`);
                                    console.log(job._id);
                                }}
                            >
                                Take me to job description page
                            </button>
                        </>
                    ))}
                </ul>
            </Paper>
        </Container>
    );
};

export default SearchPage;