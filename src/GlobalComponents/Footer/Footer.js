import React from 'react';

const Footer = () => {
    return (
        <div style={{
            marginTop: '30px',
            backgroundColor: '#dee8f3',
            width: '100%',
            height: '10vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h5>All rights reserved &copy; <span style={{ color: 'blue' }}>Job Seeker</span></h5>
        </div>
    );
};

export default Footer;