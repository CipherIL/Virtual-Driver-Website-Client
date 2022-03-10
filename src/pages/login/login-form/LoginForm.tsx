import React, { useContext, useState } from 'react'
import CustomButton from '../../../components/shared/customButton/CustomButton';
import CustomInput from '../../../components/shared/customInput/CustomInput';
import { IUser, UserContext } from '../../../contexts/user.context';
import { emailRegex } from '../../../data/regex';
import { userLogin } from '../../../server/user.requests';
import { IServerResponse } from '../../../types/server.types';

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
  //State Hooks
  const [formMessage,setFormMessage] = useState(defaultFormMessage);
  const [loginData,setLoginData] = useState(defaultLoginData);
  const [disableForm,setDisableForm] = useState(false);
  
  //Context variables
  const {setUser} = useContext(UserContext);

  //Component Logic
  const handleLogin = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setDisableForm(true);
    if(!emailRegex.test(loginData.email)) {
      setFormMessage({message:"Email is not valid!",isError:true});
    } else {
      try {
        const userData: IServerResponse = await userLogin(loginData);
        if(userData.status === 200 && userData.data) {
          setUser && setUser(userData.data as IUser);
        } else {
          setFormMessage({message:userData.data as string,isError:true});
        }
      } catch (err) {
        console.log(err);
      }
    }
    setTimeout(()=>setDisableForm(false),1000)
    
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

  //Component Render
  return (
    <div className={['login-form',addClass,(disableForm?"disabled":"")].join(" ")}>
      <h1 className='login-form__title'>Login</h1>
      <form className='login-form__form'>

        <CustomInput 
          label={"Email"} 
          value={loginData.email}
          isDisabled={disableForm}
          onChangeHandler={handleEmailChange}
        />

        <CustomInput 
          label={"Password"} 
          type={"password"} 
          value={loginData.password}
          isDisabled={disableForm}
          onChangeHandler={handlePasswordChange}
        />

        <CustomButton 
          buttonText='Login' 
          onClickHandler={handleLogin}
          isDisabled={disableForm}
        />

      </form>
      <span className={'login-form__form-message '+(formMessage.isError?"error":"")}>
        {formMessage.message}
      </span>
      <span onClick={()=>{if(!disableForm)switchForm()}} className='login-form__switch-button'>
        Not registered? Click here!
      </span>
    </div>
  )
}

export default LoginForm