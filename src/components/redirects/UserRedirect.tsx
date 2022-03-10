import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context'
import { tokenRelogin } from '../../server/user.requests';
import Loader from '../shared/loader/Loader';

const UserRedirect :React.FC = ({children}) => {
    const {user,setUser} = useContext(UserContext);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            const token = Cookies.get('AuthToken');
            if(user || !token) return setLoading(false);
            tokenRelogin()
            .then((data)=>{
                if(data) {
                  setUser && setUser(data.data);
                }
            })
            .catch((err)=>{
                alert(err);
            })
        },500)
    },[])

    if(loading && !user) return <Loader/>
    if(!user) return <Navigate to="/login"/>
    else return <>{children}</>;
}

export default UserRedirect