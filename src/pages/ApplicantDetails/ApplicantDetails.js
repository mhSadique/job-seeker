import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ApplicantDetails = () => {
    const { id } = useParams();
    const [applicant, setApplicant] = useState({});
    useEffect(() => {
        fetch(`https://cryptic-retreat-93579.herokuapp.com/api/jobSeeker/${id}`, {
            // method: 'POST',
            headers: {
                Authorization: localStorage.getItem("token")
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setApplicant(data.user);
            })
    }, [id]);
    return (
        <Container>
            <Grid
                item
                sx={[{
                    flexGrow: 1,
                    flexBasis: '48%',
                    backgroundColor: '#DEE8F3',
                    p: 2,
                    borderRadius: 2,
                    borderColor: '#a0a0e7',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    mt: 2
                },
                {
                    '&:hover': {
                        backgroundColor: '#cdcde0'
                    }
                }]}
            >
                <Grid item>
                    <Typography
                        component='h4'
                        variant='h4'
                        sx={{ color: '#338033', mb: 1 }}
                    >Applicant's Information
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        component='h6'
                        variant='h6'
                    >Full Name: {applicant.firstName + " " + applicant.lastName}
                    </Typography>
                    <Typography
                        component='h6'
                        variant='h6'
                    >Born on: {applicant.dateOfBirth}
                    </Typography>
                    <Typography
                        component='h6'
                        variant='h6'
                    >Gender: {applicant.gender}
                    </Typography>
                    <Typography
                        component='h6'
                        variant='h6'
                    >Marital Status: {applicant.maritalStatus}
                    </Typography>
                    <Typography
                        component='h6'
                        variant='h6'
                    >Skill: {applicant.skillType}
                    </Typography>
                    <Typography
                        component='h4'
                        variant='h4'
                        sx={{ color: '#338033', my: 1 }}
                    >Applicant's Contact Information
                    </Typography>
                    <Typography
                        component='h6'
                        variant='h6'
                    >Email: {applicant.email}
                    </Typography>
                    <Typography
                        component='h6'
                        variant='h6'
                    >Phone: {applicant.phone}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ApplicantDetails;