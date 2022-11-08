import { GoogleAuthProvider } from 'firebase/auth'
import React, { useContext } from 'react'
import {FcGoogle} from 'react-icons/fc'
import { useLocation, useNavigate } from 'react-router-dom'
import { authProvider } from '../../contextApi/UserContext'
import { saveToken } from '../Utilities/saveToken'

const GoogleLogin = () => {
    const location = useLocation;
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const {googleLogin} = useContext(authProvider)
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin =()=>{
        googleLogin(googleProvider)
        .then(result =>{
            const currentUser = {
                email: result.user.currentUser
            };
            saveToken(currentUser,from,navigate)
        })
        .catch()
    }
  return (
    <div>
        <button onClick={handleGoogleLogin} className='p-2 border-2 flex items-center w-full justify-center gap-2 font-bold rounded-lg'><FcGoogle/> Login With Google</button>
    </div>
  )
}

export default GoogleLogin