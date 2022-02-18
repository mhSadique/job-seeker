import React, { useEffect, useState } from 'react';
import JobCategorySingle from '../../../components/JobCategorySingle/JobCategorySingle';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <Paper elevation={0}>
            <Typography
                component='h3'
                variant='h4'
                sx={{ mb: 2 }}
            >
                Browse Category
            </Typography>
            <Grid container sx={{ rowGap: 1 }}>
                {categories.map(cat => <JobCategorySingle jobCategory={cat.type} />)}
            </Grid>
        </Paper>
    );
};

export default Categories;