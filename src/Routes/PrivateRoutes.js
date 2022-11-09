import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { authProvider } from '../contextApi/UserContext'


const PrivateRoutes = ({children}) => {
    const location = useLocation;
    const {user,loading} = useState(authProvider)
    if(loading){
        
        return <p>loading...</p>
    }

    if(user?.uid){
        return children
    }
    
  return <Navigate to= '/login' state={{from:location}} replace></Navigate>
}

export default PrivateRoutes