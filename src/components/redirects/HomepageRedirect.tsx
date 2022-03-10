import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context'
import { tokenRelogin } from '../../server/user.requests';
import Loader from '../shared/loader/Loader';

const HomepageRedirect = () => {

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
    if(user) return <Navigate to="/my-files"/>
    else return <Navigate to="/login"/>
}

export default HomepageRedirect