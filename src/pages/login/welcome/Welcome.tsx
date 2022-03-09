import React from 'react';
import './welcome.styles.scss';

const Welcome = () => {
    return (
        <div className='welcome-message'>
            <h1>Welcome to CloudBox!</h1>
            <p>Upload files for safe storage on our cloud based storage system.</p>
            <p>Share your files with friends!</p>
            <img src="/images/CloudBox_Logo.png" alt="logo" />
        </div>
    )
}

export default Welcome;
