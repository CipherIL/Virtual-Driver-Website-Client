import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context'

const UserRedirect :React.FC = ({children}) => {
    const {user} = useContext(UserContext);
    if(!user) return <Navigate to="/login"/>
    else return <>{children}</>;
}

export default UserRedirect