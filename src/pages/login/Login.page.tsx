import React, { useState } from 'react'
import Welcome from './welcome/Welcome';
import './login.styles.scss';
import LoginForm from './login-form/LoginForm';
import RegisterForm from './register-form/RegisterForm';
import { CSSTransition } from 'react-transition-group';


const Login = () => {   
    //@ts-ignore
    const [showLoginForm,setShowLoginForm] = useState(true);
    const switchForm = () => {
        setShowLoginForm(!showLoginForm);
    }

    return (
        <div className='login-page'>
            <Welcome/>
            <div className='forms-container'>
                <CSSTransition in={showLoginForm} timeout={300} classNames="switch">
                <div className='form-card'>
                    <LoginForm addClass={(showLoginForm?"":"hidden")} switchForm={switchForm}/>
                    <RegisterForm addClass={(showLoginForm?"hidden":"")} switchForm={switchForm}/>
                </div>
                </CSSTransition>
            </div>
        </div>
    )
}

export default Login;