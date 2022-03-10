import { Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Job = ({ details, id }) => {
    const history = useHistory();
    const { salary, applicantAge, company, applicantGender, applicationDeadline, educationalRequirements, employmentStatus, employmentType, experienceRequirements, jobCategory, jobKeySellingPoints, jobLocation, jobResponsibilities, jobTitle, jobVacancy, publishedOn, _id } = details;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(3),
        textAlign: 'left',
        marginLeft: "auto",
        marginRight: "auto",
        color: theme.palette.text.secondary,
    }));
    return (
        <>

            <Grid item xs={12} md={8}>
                <Item >
                    <h1>{jobTitle}</h1>
                    <h2>{company}</h2>
                    <h3>Key Selling Points</h3>
                    {jobKeySellingPoints.map(k => <li key={k}>{k}</li>)}
                    <h3>Vacancy</h3>
                    {jobVacancy}
                    <h3>Job Responsibilities</h3>
                    {jobResponsibilities.map(r => <li key={r}>{r}</li>)}
                    <h3>Employment Status</h3>
                    {employmentStatus}
                    <h3>Educational Requirements</h3>
                    {educationalRequirements}
                    <h3>Employment Status</h3>
                    {employmentStatus}
                    <h3>Experience Requirements</h3>
                    {experienceRequirements.map(e => <li key={e}>{e}</li>)}
                    <h3>Job Location</h3>
                    {jobLocation}
                    <h3>Salary</h3>
                    {salary ? salary : 'Negotiable'}
                    {/* <h3>Compensation and Other Benefits</h3> */}
                    {/* {compensationAndOther} */}
                </Item>
            </Grid>

            <Grid item xs={12} md={4}>
                <Item>
                    <h1>Job Summary</h1>
                    <h3>Published on: {publishedOn}</h3>
                    <h3>Vacancy: {jobVacancy}</h3>
                    <h3>Experience:</h3>
                    <ul>
                        {experienceRequirements.map(e => <li key={e}>{e}</li>)}
                    </ul>
                    <h3>Gender: {applicantGender}</h3>
                    <h3>Age: {applicantAge}</h3>
                    <h3>Salary: {salary ? salary : 'Negotiable'}</h3>
                    <h3>Application Deadline{applicationDeadline}</h3>
                    <Button
                        variant='contained'
                        onClick={() => {
                            history.push(`/apply-job/${id}`)
                        }}
                    >
                        Apply
                    </Button>
                </Item>

            </Grid>
        </>
    );
};

export default Job;