import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authProvider } from "../../contextApi/UserContext";
import GoogleLogin from "../../Shared/Social_login/GoogleLogin";
import { saveToken } from "../../Shared/Utilities/saveToken";

const Login = () => {
  const [error,setError] = useState('')
  const [show,setShow] = useState(false)
  const {userLogin} = useContext(authProvider)
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const navigate = useNavigate()
  const handleLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

     
    userLogin(email,password)
    .then(result => {
      const currentUser = {
        email : result.user.email
      }

     saveToken(currentUser,from,navigate)
      
    })
    .catch(e => {
      console.error(e)
      setError('Invalid Email or Password')
    })
  }
  return (
    <div className=" w-full flex justify-center mt-20">
      
      <Card className=" md:w-96 text-left">
      <h3 className="text-2xl my-4">Login</h3>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
            <TextInput id="password1" type={show? 'text': 'password'} name="password" required={true} />
            <p className="text-red-700">{error}</p>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox onClick={()=>setShow(!show)} id="remember" />
            <Label htmlFor="remember">Show Password</Label>
          </div>
          <Button type="submit">Login</Button>
          <small>New to this website?<Link to='/register'>Register</Link></small>

        </form>
        <GoogleLogin/>
      </Card>
    </div>
  );
};

export default Login;
