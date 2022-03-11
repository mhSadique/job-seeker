// import React from 'react';
// import { useParams } from 'react-router-dom';

// const CategoryDetails = () => {
//     const { categoryName } = useParams();
//     return (
//         <div>
//             {categoryName}
//         </div>
//     );
// };

// export default CategoryDetails;

import { Paper, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleJobInSearchResultPage from '../../components/SingleJobInSearchResultPage/SingleJobInSearchResultPage';

const SearchPage = () => {
    const { categoryName } = useParams();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://cryptic-retreat-93579.herokuapp.com/api/jobs?keyword=&jobCategory=${categoryName}
        `)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setJobs(data.allJobs);
            });
    }, [categoryName]);

    return (
        <Container sx={{ minHeight: '90vh' }}>
            {!loading
                ? <Paper
                    elevation={0}
                    sx={{ mt: 2 }}>
                    <Typography
                        component='body'
                        variant='h6'
                        sx={{ pl: 2, fontWeight: '600' }}
                    >
                        Showing search result for: {categoryName} {`(${jobs.length} ${jobs.length > 1 ? 'results' : 'result'})`}
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
                :
                <h2>Loading...</h2>
            }
        </Container>
    );
};

export default SearchPage;