import React, { useContext, useState } from 'react'
import { Button, Card, Label, TextInput } from "flowbite-react";
import { authProvider } from '../../contextApi/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
  const [error,setError] = useState('')
  const{createUser,updateUser} = useContext(authProvider)
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const navigate = useNavigate()
  const handleRegister = (e)=>{
   
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if(password.length < 6){
      setError('Password should be more than 6 characters')
    }

    createUser(email,password)
    .then(result =>{
      console.log(result.user)
      updateUserProfile(name,photo)
      navigate(from,{replace:true})

    })
    .catch(e => console.error(e))

  }

  const updateUserProfile =(name,photo)=>{
    const profile = {
      displayName:name,
      photoURL:photo
    }
    updateUser(profile)
    .then(result => console.log(result.user))
    .catch(e => console.error(e))
  }
  return (
    <div className=" w-full flex justify-center mt-20">
      
      <Card className="w-96 text-left">
      <h3 className="text-2xl my-4">Register</h3>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Name"
              name = 'name'
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photo" value="Your photo" />
            </div>
            <TextInput
              id="photo"
              type="text"
              placeholder="Photo url"
              name = 'photo'
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Email"
              name = 'email'
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" name="password" required={true} />
          </div>
          <p className='text-red-700'>{error}</p>
          <Button type="submit">Register</Button>
          <small>Already have an account?<Link to='/login'>Login</Link></small>
        </form>
      </Card>
    </div>
  )
}

export default Register