import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/user.context';
import './userButton.styles.scss';

const UserButton: React.FC = () => {
  const {user} = useContext(UserContext);
  console.log(user)

  return (
    <>
      {!user && 
        <Link to="/login" className='login-button'>
          <div className='login-button__image-container'>
            <FontAwesomeIcon icon={"user"} size={"2x"} className='login-button__image'/>
          </div>
          <div className='login-button__text'>Login</div>
        </Link>
      }
      {user && 
        <div className='user-button'>
          <div className='user-button__letters-container'>
            {user.firstName[0].toLocaleUpperCase()+user.lastName[0].toLocaleUpperCase()}
          </div>
          <div className='user-button__text'>
            <div className='user-button__text__email'>{user.email}</div>
            <div className='user-button__text__logout'>Logout</div>  
          </div>
        </div>
      }
    </>   
  )
}

export default UserButton