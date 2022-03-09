import { Button, Card, Container, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ApplyJob = () => {
    const userId = "take it form userInfo"
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://cryptic-retreat-93579.herokuapp.com/api/jobSeeker/${"6228d06f5a941f0016969950"}`) // take the user id from db and 
            .then(res => res.json())
            .then(data => {
                setUser(data.user);
            })
    }, [userId]);
    return (
        <Container
            sx={{ textAlign: 'center' }}
        >
            <Typography
                component='h4'
                variant='h4'
                sx={{
                    my: 2
                }}
            >
                Employer will see all the information about you including the below:
            </Typography>
            <Card
                elevation={4}
                sx={{
                    width: '50%',
                    margin: '0 auto',
                    textAlign: 'left',
                    p: 2
                }}
            >
                <Typography
                    component='h6'
                    variant='h6'
                    sx={{
                        my: 2
                    }}
                >
                    Name: {user.firstName + ' ' + user.lastName}
                </Typography>
                <Typography
                    component='h6'
                    variant='h6'
                    sx={{
                        my: 2
                    }}
                >
                    Email: {user.email}
                </Typography>
                <Typography
                    component='h6'
                    variant='h6'
                    sx={{
                        my: 2
                    }}
                >
                    Phone: {user.phone}
                </Typography>
                <Button
                    onClick={() => console.log('submitting application')} // when user clicks the button, send the application data to the recruiter and upon successfull operation, confirm the user about the completion of the application and send him to homepage
                    variant='contained'
                    sx={{
                        width: '100%'
                    }}
                >
                    Confirm Apply
                </Button>
            </Card>
        </Container>
    );
};

export default ApplyJob;