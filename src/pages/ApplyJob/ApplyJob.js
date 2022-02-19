import React, { useEffect, useState } from 'react';

const ApplyJob = () => {
    const userId = "take it form userInfo"
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch(`https://cryptic-retreat-93579.herokuapp.com/api/jobSeeker/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data);
                console.log(data);
            })
    }, [userId]);
    return (
        <div>
            ApplyJob
            <h2>id is {userId}</h2>
            <h2>{userInfo.success ? 'Got result' : 'Did not get any result'}</h2>
        </div>
    );
};

export default ApplyJob;