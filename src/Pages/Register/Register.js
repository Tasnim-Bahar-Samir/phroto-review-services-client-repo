import React, { useContext } from 'react'
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { authProvider } from '../../contextApi/UserContext';
import { Link } from 'react-router-dom';

const Register = () => {
  const{createUser} = useContext(authProvider)
  const handleRegister = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email,password)
    .then(result =>{
      console.log(result.user)
    })
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
          {/* <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Show Password</Label>
          </div> */}
          <Button type="submit">Register</Button>
          <small>Already have an account?<Link to='/login'>Login</Link></small>
        </form>
      </Card>
    </div>
  )
}

export default Register