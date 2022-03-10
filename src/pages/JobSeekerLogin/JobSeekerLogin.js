import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUserInfo } from '../../redux/features/auth/authSlice';
import './Login.css';
const JobSeekerLogin = () => {
    const [userInfo, setUserInfo] = useState({ email: '', password: '' });

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    // useEffect(() => {
    //     dispatch(fetchUserInfo);
    // }, [dispatch]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (userInfo.email === '' || userInfo.password === '') return;

        // ***********//
        // call an api for login and after getting a successful response, check the user role, save the logged in status somewhere

        fetch('https://cryptic-retreat-93579.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: userInfo.email,
                password: userInfo.password
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('token', data.token);
                    dispatch({ type: 'userFound', payload: data.user });
                    alert('You have logged in successfully.');
                    setUserInfo({ email: userInfo.email, password: userInfo.password });
                    history.push('/');
                }
            })
    };

    console.log(user, 'job seeker login');

    const onInputChange = (e) => {
        const fieldName = e.target.name;
        const newFieldValue = e.target.value;
        const userNewInfo = { ...userInfo, [fieldName]: newFieldValue }
        setUserInfo(userNewInfo);
    };

    return (
        <div className="new-package-form">
            <h1>Login as a job seeker</h1>

            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>

            </form>

        </div>
    );
};

export default JobSeekerLogin;