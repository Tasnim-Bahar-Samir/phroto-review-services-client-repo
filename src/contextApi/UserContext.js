import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const authProvider = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    const googleLogin = (provider)=>{
        return signInWithPopup(auth,provider)
    }

    const userLogOut = ()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
    
      return () => {
        unSubscribe()
      }
    }, [])
    

    const userInfo = {user,createUser,userLogin,updateUser,userLogOut,googleLogin,loading}
  return (
    <authProvider.Provider value={userInfo}>
        {children}
    </authProvider.Provider>
  )
}

export default UserContext