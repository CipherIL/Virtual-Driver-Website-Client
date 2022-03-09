import React, { useContext, useState } from 'react'
import CustomButton from '../../../components/shared/customButton/CustomButton';
import CustomInput from '../../../components/shared/customInput/CustomInput';
import { UserContext } from '../../../contexts/user.context';
import { emailRegex } from '../../../data/regex';
import './loginForm.styles.scss';

interface Props {
  addClass: string;
  switchForm: () => void;
}
const defaultFormMessage = {
  message:"Login to see and share your files!",
  isError: false,
}
const defaultLoginData = {
  email: "",
  password: "",
}

const LoginForm: React.FC<Props> = ({addClass,switchForm}) => {
  const [formMessage,setFormMessage] = useState(defaultFormMessage);
  const [loginData,setLoginData] = useState(defaultLoginData)
  const {setUser} = useContext(UserContext);
  const handleLogin = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(!emailRegex.test(loginData.email)) {
      setFormMessage({message:"Email is not valid!",isError:true});
    } else {
      console.log("test")
    }
  }

  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({...loginData,email:e.target.value});
    if(formMessage.isError) {
      setFormMessage(defaultFormMessage);
    }
  }
  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({...loginData,password:e.target.value});
  }

  return (
    <div className={'login-form '+ addClass}>
      <h1 className='login-form__title'>Login</h1>
      <form className='login-form__form'>

        <CustomInput 
          label={"Email"} 
          value={loginData.email} 
          onChangeHandler={handleEmailChange}
        />

        <CustomInput 
          label={"Password"} 
          type={"password"} 
          value={loginData.password} 
          onChangeHandler={handlePasswordChange}
        />

        <CustomButton 
          buttonText='Login' 
          onClickHandler={handleLogin}
        />

      </form>
      <span className={'login-form__form-message '+(formMessage.isError?"error":"")}>
        {formMessage.message}
      </span>
      <span onClick={switchForm} className='login-form__switch-button'>Not registered? Click here!</span>
    </div>
  )
}

export default LoginForm