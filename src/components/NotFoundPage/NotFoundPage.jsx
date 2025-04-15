import React from 'react';
import {useNavigate} from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    const styles = {
        buttonWrapper: {
            margin: '0 auto',
            marginTop: '20px'
        },
        button: {
            cursor: 'pointer',
            outline: 'none',
            padding: '15px',
            userSelect: 'none',
            fontSize: '18px',
            borderRadius: '6px',
            transition: 'all 0.2s ease-in-out',
            color: '#26203c',
            backgroundColor: '#f3f9fd',
            border: 'none',
            display: 'block',
            width: '200px',
            margin: '0 auto'
        }
    };


    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404</h1>
            <p>Page Not Found</p>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <div  style={styles.buttonWrapper}>
                <button style={styles.button} onClick={() => navigate('/')}>Go back</button>
            </div>
        </div>
    );
};

export default NotFoundPage;