import { Button, Card, Container, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const ApplyJob = () => {
    const { id } = useParams();
    // const [user, setUser] = useState({});
    const history = useHistory();
    const user = useSelector(state => state.user);
    console.log(user.role, 'APPLY');


    // useEffect(() => {
    //     fetch(`https://cryptic-retreat-93579.herokuapp.com/api/jobSeeker/${"6228d06f5a941f0016969950"}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUser(data.user);
    //         })
    // }, []);

    const handleConfirm = () => {
        fetch(`https://cryptic-retreat-93579.herokuapp.com/api/apply/job`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                Authorization: localStorage.getItem("token")
            },
            body: JSON.stringify({ 'jobId': id })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <Container
            sx={{ textAlign: 'center' }}
        >
            {user.firstName && <Box>
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
                        onClick={handleConfirm} // when user clicks the button, send the application data to the recruiter and upon successfull operation, confirm the user about the completion of the application and send him to homepage
                        variant='contained'
                        sx={{
                            width: '100%'
                        }}
                    >
                        Confirm Apply
                    </Button>
                </Card>
            </Box>}
        </Container>
    );
};

export default ApplyJob;