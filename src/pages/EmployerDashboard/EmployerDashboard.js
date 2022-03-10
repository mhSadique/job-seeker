import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const EmployerDashboard = () => {
    const history = useHistory();
    const user = useSelector(state => state.user);
    const [applicants, setApplicants] = useState([])

    useEffect(() => {
        fetch('https://cryptic-retreat-93579.herokuapp.com/api/recruiter/applicants', {
            headers: {
                Authorization: localStorage.getItem("token")
            },
        })
            .then(res => res.json())
            .then(data => {
                setApplicants(data.jobApplicants);
            })
    }, [])

    console.log(applicants);


    return (
        <Container>
            <Typography
                component='h4'
                variant='h4'
                sx={{
                    textAlign: 'center',
                    my: 2
                }}
            >
                The applicants that applied to the job you created.
            </Typography>
            {applicants.length && applicants.map(applicant => (
                <Grid
                    item
                    sx={[{
                        flexGrow: 1,
                        flexBasis: '48%',
                        backgroundColor: '#DEE8F3',
                        p: 2,
                        borderRadius: 2,
                        cursor: 'pointer',
                        borderColor: '#a0a0e7',
                        borderWidth: '1px',
                        borderStyle: 'solid',

                    },
                    {
                        '&:hover': {
                            backgroundColor: '#cdcde0'
                        }
                    }]}
                    onClick={() => {
                        history.push(`/applicant-info/${applicant.user}`)
                    }}
                >
                    <Grid item>
                        <Typography
                            component='h4'
                            variant='h4'
                            sx={{ color: '#338033' }}
                        >Applicant's Name: {applicant.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            component='h6'
                            variant='h6'
                        >Click to know more about {applicant.name}'s qualifications.</Typography>
                    </Grid>
                </Grid>
            ))}

        </Container>
    );
};

export default EmployerDashboard;