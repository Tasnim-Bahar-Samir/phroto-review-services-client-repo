import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../Components/Loader';
import { authProvider } from '../contextApi/UserContext'


const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(authProvider)
    if(loading){
        
        return <Loader/>
    }

    if(user){
        return children
    }
    
  return <Navigate to= '/login' state={{from:location}} replace></Navigate>
}

export default PrivateRoutes