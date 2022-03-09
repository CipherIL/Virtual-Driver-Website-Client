import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context'

const HomepageRedirect = () => {
    const {user} = useContext(UserContext);
    if(user) return <Navigate to="/my-files"/>
    else return <Navigate to="/login"/>
}

export default HomepageRedirect