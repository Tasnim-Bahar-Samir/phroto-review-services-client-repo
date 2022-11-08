import React, { createContext, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const authProvider = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const userInfo = {user,createUser,userLogin}
  return (
    <authProvider.Provider value={userInfo}>
        {children}
    </authProvider.Provider>
  )
}

export default UserContext