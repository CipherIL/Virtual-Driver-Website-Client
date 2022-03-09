import React from 'react'
import './registerForm.styles.scss';

interface Props {
  addClass: string;
  switchForm: () => void;
}

const RegisterForm: React.FC<Props> = ({addClass,switchForm}) => {
  return (
    <div className={'register-form '+ addClass}>
      <span onClick={switchForm} className='login-form__switch-button'>Already have a user? Click here!</span>
    </div>
  )
}

export default RegisterForm