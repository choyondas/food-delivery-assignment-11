import React from 'react';


import useAuth from '../../hooks/useAuth';
import Register from '../Register/Register';

import "./Login.css"
const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div className='login-page'>
            <Register></Register>

        </div>
    );
};

export default Login;