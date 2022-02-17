import React, { useState } from 'react';
import './EmployerCreateAccount.css';
const EmployerCreateAccount = () => {

    const initialState = {
        userType: 'employer',
        email: '',
        password: '',
        companyName: '',
        companyDescription: '',
        companySize: '',
        companyType: '',
        companyAddress: '',
        tradeLiscenseNo: '',
        contactPersonsName: '',
        contactPersonsEmail: '',
        contactPersonsPhone: '',
    };

    const [userInfo, setUserInfo] = useState(initialState);


    const handleAddNewProduct = (e) => {

        fetch('PUT-API-HERE', { // **************************** //
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                alert(data);
                setUserInfo(initialState)
            })

        console.log(userInfo);
        setUserInfo(initialState);
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
            <h1>Create Employer Account</h1>

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

                <label htmlFor="companyName">Company Name: </label><br />
                <input
                    type="tel"
                    name="companyName"
                    placeholder="Company Name"
                    value={userInfo.companyName}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="companyDescription">Company Description: </label><br />
                <input
                    type="text"
                    name="companyDescription"
                    placeholder="Company Description"
                    value={userInfo.companyDescription}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="companySize">Company Size: </label><br />
                <input
                    type="text"
                    name="companySize"
                    placeholder="Company Size"
                    value={userInfo.companySize}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="companyType">Company Type: </label><br />
                <input
                    type="text"
                    name="companyType"
                    placeholder="Company Type"
                    value={userInfo.companyType}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="companyAddress">Company Address: </label><br />
                <input
                    type="text"
                    name="companyAddress"
                    placeholder="Company Address"
                    value={userInfo.companyAddress}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="tradeLiscenseNo">Trade Liscense No: </label><br />
                <input
                    type="text"
                    name="tradeLiscenseNo"
                    placeholder="Trade Liscense No"
                    value={userInfo.tradeLiscenseNo}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="contactPersonsName">Contact Person's Name: </label><br />
                <input
                    type="text"
                    name="contactPersonsName"
                    placeholder="Contact Person's Name"
                    value={userInfo.contactPersonsName}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="contactPersonsEmail">Contact Person's Email: </label><br />
                <input
                    type="text"
                    name="contactPersonsEmail"
                    placeholder="Contact Person's Email"
                    value={userInfo.contactPersonsEmail}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <label htmlFor="contactPersonsPhone">Contact Person's Phone: </label><br />
                <input
                    type="text"
                    name="contactPersonsPhone"
                    placeholder="Contact Person's Phone"
                    value={userInfo.contactPersonsPhone}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <button type="submit">Create Your Account</button>

            </form>

        </div>
    );
};

export default EmployerCreateAccount;