import React, { useState } from 'react';
import './CreateJob.css';
const CreateJob = () => {

    const initialState = {
        jobTitle: '',
        jobCategory: '',
        jobVacancy: '',
        jobResponsibilities: [],
        jobKeySellingPoints: [],
        employmentStatus: '',
        employmentType: '',
        educationalRequirements: [],
        experienceRequirements: [],
        jobLocation: '',
        salary: '',
        applicantGender: '',
        applicantAge: '',
        publishedOn: '',
        applicationDeadline: '',
    };


    const [employerInfo, setEmployerInfo] = useState(initialState);


    const handleAddNewProduct = (e) => {
        const employerInfoRaw = employerInfo;
        const jobResponsibilitiesString = employerInfoRaw.jobResponsibilities;
        const jobKeySellingPointsString = employerInfoRaw.jobKeySellingPoints;
        const educationalRequirementsString = employerInfoRaw.educationalRequirements;
        const experienceRequirementsString = employerInfoRaw.experienceRequirements;
        const jobResponsibilitiesStringArray = jobResponsibilitiesString.split(';')
        const jobKeySellingPointsArray = jobKeySellingPointsString.split(';');
        const educationalRequirementsArray = educationalRequirementsString.split(';');
        const experienceRequirementsArray = experienceRequirementsString.split(';');

        const newEmployerInfo = {
            ...employerInfoRaw,
            jobResponsibilities: jobResponsibilitiesStringArray,
            jobKeySellingPoints: jobKeySellingPointsArray,
            educationalRequirements: educationalRequirementsArray,
            experienceRequirements: experienceRequirementsArray

        };

        fetch('PUT-API-HERE', { // **************************** //
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEmployerInfo)
        })
            .then(res => res.json())
            .then(data => {
                alert(data);
                setEmployerInfo(initialState)
            })

        console.log(newEmployerInfo);
        setEmployerInfo(initialState);
        e.preventDefault();
    };


    const onInputChange = (e) => {
        const userPrevInfo = employerInfo;
        const fieldName = e.target.name;
        const newFieldValue = e.target.value;
        const userNewInfo = { ...userPrevInfo, [fieldName]: newFieldValue }
        setEmployerInfo(userNewInfo);
    };

    return (
        <div className="new-package-form">
            <h1>Create a Job</h1>

            <form onSubmit={handleAddNewProduct}>
                <label htmlFor="jobTitle">Job Title: </label><br />
                <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={employerInfo.jobTitle}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="jobCategory">Job Category: </label><br />
                <input
                    type="text"
                    name="jobCategory"
                    placeholder="Job Category"
                    value={employerInfo.jobCategory}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="jobVacancy">Job Vacancy: </label><br />
                <input
                    type="text"
                    name="jobVacancy"
                    placeholder="Job Vacancy"
                    value={employerInfo.jobVacancy}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="jobResponsibilities">Job Responsibilities: </label><br />
                <input
                    type="text"
                    name="jobResponsibilities"
                    placeholder="Job Responsibilities"
                    value={employerInfo.jobResponsibilities}
                    onChange={(e) => onInputChange(e)}
                />
                <br />


                <label htmlFor="jobKeySellingPoints">Key Selling Points: </label><br />
                <input
                    type="text"
                    name="jobKeySellingPoints"
                    placeholder="Put a semi-colon ( ; ) between each point"
                    value={employerInfo.jobKeySellingPoints}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="employmentStatus">Employment Status: </label><br />
                <input
                    type="text"
                    name="employmentStatus"
                    placeholder="Employment Status"
                    value={employerInfo.employmentStatus}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="employmentType">Employment Type: </label><br />
                <input
                    type="text"
                    name="employmentType"
                    placeholder="Employment Type"
                    value={employerInfo.employmentType}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="educationalRequirements">Educational Requirements: </label><br />
                <input
                    type="text"
                    name="educationalRequirements"
                    placeholder="Educational Requirements"
                    value={employerInfo.educationalRequirements}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="experienceRequirements">Experience Requirements: </label><br />
                <input
                    type="text"
                    name="experienceRequirements"
                    placeholder="Experience Requirements"
                    value={employerInfo.experienceRequirements}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="jobLocation">Job Location: </label><br />
                <input
                    type="text"
                    name="jobLocation"
                    placeholder="Job Location"
                    value={employerInfo.jobLocation}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="salary">Salary: </label><br />
                <input
                    type="text"
                    name="salary"
                    placeholder="Salary"
                    value={employerInfo.salary}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="applicantGender">Applicant's Gender: </label><br />
                <input
                    type="text"
                    name="applicantGender"
                    placeholder="Applicant's Gender"
                    value={employerInfo.applicantGender}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="applicantAge">Applicant's age: </label><br />
                <input
                    type="text"
                    name="applicantAge"
                    placeholder="Applicant's Age"
                    value={employerInfo.applicantAge}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="publishedOn">Job Publication Date: </label><br />
                <input
                    type="text"
                    name="publishedOn"
                    placeholder="Date you publish the job on"
                    value={employerInfo.publishedOn}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="applicationDeadline">Application Deadline: </label><br />
                <input
                    type="text"
                    name="applicationDeadline"
                    placeholder="Application Deadline"
                    value={employerInfo.applicationDeadline}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <button type="submit">Create Job</button>

            </form>

        </div>
    );
};
export default CreateJob;