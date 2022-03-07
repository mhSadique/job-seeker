import React, { useEffect } from 'react';
import JobCategorySingle from '../../../components/JobCategorySingle/JobCategorySingle';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/features/categories/categoriesSlice';

const Categories = () => {
    const categories = useSelector(state => state.categories);
    console.log(categories);
    const dispatch = useDispatch();
    // Need to change the dependencies of useEffect because it is rendered mulitple times and existing categories keep adding 
    useEffect(() => {
        dispatch(fetchCategories);
    }, [dispatch]);

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
                {categories.map(cat => <JobCategorySingle jobCategory={cat} key={cat} />)}
            </Grid>
        </Paper>
    );
};

export default Categories;