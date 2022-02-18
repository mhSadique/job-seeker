import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from 'react';

const Job = ({ details }) => {
    const { salary, applicantAge, company, applicantGender, applicationDeadline, educationalRequirements, employmentStatus, employmentType, experienceRequirements, jobCategory, jobKeySellingPoints, jobLocation, jobResponsibilities, jobTitle, jobVacancy, publishedOn } = details;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
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
                    {jobKeySellingPoints}
                    <h3>Vacancy</h3>
                    {jobVacancy}
                    <h3>Job Responsibilities</h3>
                    {jobResponsibilities}
                    <h3>Employment Status</h3>
                    {employmentStatus}
                    <h3>Educational Requirements</h3>
                    {educationalRequirements}
                    <h3>Employment Status</h3>
                    {employmentStatus}
                    <h3>Experience Requirements</h3>
                    {experienceRequirements}
                    <h3>Job Location</h3>
                    {jobLocation}
                    <h3>Salary</h3>
                    {salary}
                    <h3>Compensation and Other Benefits</h3>
                    {/* {compensationAndOther} */}
                </Item>
            </Grid>

            <Grid item xs={12} md={4}>
                <Item>
                    <h1>Job Summary</h1>
                    <h3>Published on: {publishedOn}</h3>
                    <h3>Vacancy: {jobVacancy}</h3>
                    <h3>Experience: {experienceRequirements}</h3>
                    <h3>Gender: {applicantGender}</h3>
                    <h3>Age: {applicantAge}</h3>
                    <h3>Salary: {salary}</h3>
                    <h3>Application Deadline{applicationDeadline}</h3>
                </Item>

            </Grid>
        </>
    );
};

export default Job;