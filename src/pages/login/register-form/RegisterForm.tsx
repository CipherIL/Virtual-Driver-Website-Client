import React, { useContext, useState } from 'react'
import CustomButton from '../../../components/shared/customButton/CustomButton';
import CustomInput from '../../../components/shared/customInput/CustomInput';
import { IUser, UserContext } from '../../../contexts/user.context';
import { emailRegex, passwordRegex } from '../../../data/regex';
import { userRegister } from '../../../server/user.requests';
import { IServerResponse } from '../../../types/server.types';
import './registerForm.styles.scss';

interface Props {
  addClass: string;
  switchForm: () => void;
}
const defaultRegisterData = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
}
const defaultFormMessage = {
  message:"Password needs to be 8 characters long, and include 1 uppercase letter, 1 lowercase letter and a number",
  isError: false,
}

const RegisterForm: React.FC<Props> = ({addClass,switchForm}) => {
  //State Hooks
  const [registerData,setRegisterData] = useState(defaultRegisterData);
  const [disableForm,setDisableForm] = useState(false);
  const [formMessage,setFormMessage] = useState(defaultFormMessage);

  //Context Variables
  const {setUser} = useContext(UserContext);

  //Component Logic
  const handleRegister = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setDisableForm(true);
    const formErrorMessage = [];
    if(!emailRegex.test(registerData.email)) {
      formErrorMessage.push('email');
    }
    if(!passwordRegex.test(registerData.password)) {
      formErrorMessage.push('password');
    }
    if(registerData.firstName.length < 2) {
      formErrorMessage.push('first name');
    }
    if(registerData.lastName.length < 2) {
      formErrorMessage.push('last name');
    }
    if(formErrorMessage.length !== 0) {
      setFormMessage({message:"invalid: " + formErrorMessage.join(", "), isError:true});
    } else {
      try {
        const userData: IServerResponse = await userRegister(registerData);
        console.log(userData);
        if(userData.status === 201) {
          setUser && setUser(userData.data as IUser);
        } else {
          setFormMessage({message:userData.data as string,isError:true});
        }
      } catch (err) {
        alert(err);
      }
    }
    setTimeout(()=>{setDisableForm(false)},1000)
  }
  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({...registerData,email:e.target.value});
    if(formMessage.isError) {
      setFormMessage(defaultFormMessage);
    }
  }
  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({...registerData,password:e.target.value});
    if(formMessage.isError) {
      setFormMessage(defaultFormMessage);
    }
  }
  const handleFirstNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({...registerData,firstName:e.target.value});
    if(formMessage.isError) {
      setFormMessage(defaultFormMessage);
    }
  }
  const handleLastNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({...registerData,lastName:e.target.value});
    if(formMessage.isError) {
      setFormMessage(defaultFormMessage);
    }
  }

  //Component Render
  return (
    <div className={['register-form',addClass,(disableForm?"disabled":"")].join(" ")}>
      <h1 className='register-form__title'>Register</h1>

      <form className='register-form__form'>
        <CustomInput
          label={"Email"} 
          value={registerData.email}
          isDisabled={disableForm}
          onChangeHandler={handleEmailChange}
        />
        <CustomInput 
          label={"Password"} 
          type={"password"} 
          value={registerData.password}
          isDisabled={disableForm}
          onChangeHandler={handlePasswordChange}
        />
        <CustomInput
          label={"First Name"} 
          value={registerData.firstName}
          isDisabled={disableForm}
          onChangeHandler={handleFirstNameChange}
        />
        <CustomInput
          label={"Last Name"} 
          value={registerData.lastName}
          isDisabled={disableForm}
          onChangeHandler={handleLastNameChange}
        />

        <CustomButton 
          buttonText='Submit' 
          onClickHandler={handleRegister}
          isDisabled={disableForm}
        />
      </form>

      <span className={'register-form__form-message '+(formMessage.isError?"error":"")}>
        {formMessage.message}
      </span>
      <span onClick={switchForm} className='register-form__switch-button'>
        Already have a user? Click here!
      </span>
    </div>
  )
}

export default RegisterForm