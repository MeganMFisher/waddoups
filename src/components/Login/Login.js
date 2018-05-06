import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login'> 
            <a href={ process.env.REACT_APP_LOGIN }>Login</a>
        </div> 
    )
}

export default Login;