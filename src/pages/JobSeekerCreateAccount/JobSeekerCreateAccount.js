import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './JobSeekerCreateAccount.css';
const JobSeekerCreateAccount = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const initialState = {
        userType: 'job-seeker',
        email: '',
        password: '',
        phone: '',
        firstName: '',
        lastName: '',
        fathersName: '',
        mothersName: '',
        dateOfBirth: '',
        gender: '',
        religion: '',
        maritalStatus: '',
        passportNumber: '',
        nationalId: '',
        bloodGroup: '',
        skillType: ''
    };

    const [userInfo, setUserInfo] = useState(initialState);


    const handleAddNewProduct = (e) => {

        fetch('https://cryptic-retreat-93579.herokuapp.com/api/registerUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('token', data.token);
                    dispatch({ type: 'userFound', payload: data.user });
                    alert('You have registered successfully.');
                    setUserInfo(initialState);
                    history.push('/');
                }
            })

        console.log(userInfo);
        e.preventDefault();
    };


    const onInputChange = (e) => {
        const userPrevInfo = userInfo;
        const fieldName = e.target.name;
        const newFieldValue = e.target.value;
        const userNewInfo = { ...userPrevInfo, [fieldName]: newFieldValue }
        setUserInfo(userNewInfo);
    };

    return (
        <div className="new-package-form">
            <h1>Create Your Account</h1>

            <form onSubmit={handleAddNewProduct}>
                <label htmlFor="email">Email: </label><br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userInfo.email}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="password">Password: </label><br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userInfo.password}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="phone">Phone: </label><br />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={userInfo.phone}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="firstName">First Name: </label><br />
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={userInfo.firstName}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="lastName">Last Name: </label><br />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={userInfo.lastName}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="fathersName">Father's Name: </label><br />
                <input
                    type="text"
                    name="fathersName"
                    placeholder="Father's Name"
                    value={userInfo.fathersName}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="mothersName">Mother's Name: </label><br />
                <input
                    type="text"
                    name="mothersName"
                    placeholder="Mother's Name"
                    value={userInfo.mothersName}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="dateOfBirth">Date of birth: </label><br />
                <input
                    type="text"
                    name="dateOfBirth"
                    placeholder="Date of birth"
                    value={userInfo.dateOfBirth}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="gender">Gender: </label><br />
                <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={userInfo.gender}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="religion">Religion: </label><br />
                <input
                    type="text"
                    name="religion"
                    placeholder="Religion"
                    value={userInfo.religion}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="maritalStatus">Marital Status: </label><br />
                <input
                    type="text"
                    name="maritalStatus"
                    placeholder="Marital Status"
                    value={userInfo.maritalStatus}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="passportNumber">Passport Number: </label><br />
                <input
                    type="text"
                    name="passportNumber"
                    placeholder="Passport Number"
                    value={userInfo.passportNumber}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="nationalId">National ID: </label><br />
                <input
                    type="text"
                    name="nationalId"
                    placeholder="National ID"
                    value={userInfo.nationalId}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="bloodGroup">Blood Group: </label><br />
                <input
                    type="text"
                    name="bloodGroup"
                    placeholder="Blood Group"
                    value={userInfo.bloodGroup}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="skillType">Skill Type: </label><br />
                <input
                    type="text"
                    name="skillType"
                    placeholder="Skill Type"
                    value={userInfo.skillType}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <button type="submit">Create Your Account</button>

            </form>

        </div>
    );
};

export default JobSeekerCreateAccount;