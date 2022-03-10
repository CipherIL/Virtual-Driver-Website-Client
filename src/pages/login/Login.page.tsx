import React, { useContext, useState } from 'react'
import Welcome from './welcome/Welcome';
import './login.styles.scss';
import LoginForm from './login-form/LoginForm';
import RegisterForm from './register-form/RegisterForm';
import { CSSTransition } from 'react-transition-group';
import { UserContext } from '../../contexts/user.context';
import { Navigate } from 'react-router-dom';


const Login = () => {   
    const [showLoginForm,setShowLoginForm] = useState(true);
    const {user} = useContext(UserContext);
    const switchForm = () => {
        setShowLoginForm(!showLoginForm);
    }

    return (
        <>
            {user && <Navigate to="/"/>}
            {!user &&
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
            }
        </>
    )
}

export default Login;