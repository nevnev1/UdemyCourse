import React from 'react';
import LoginForm from './LoginForm';
//import { connect } from 'react-redux';

const LoginPage = () => (
    <div>
        <p>Image placeholder</p>
        <LoginForm 
            onSubmit={(loginData) => {
                console.log(loginData);
            }}
        />
    </div>
);

export default LoginPage;