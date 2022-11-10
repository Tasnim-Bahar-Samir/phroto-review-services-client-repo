import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader";
import { authProvider } from "../../contextApi/UserContext";
import GoogleLogin from "../../Shared/Social_login/GoogleLogin";
import { saveToken } from "../../Shared/Utilities/saveToken";

const Login = () => {
  const [loading,setLoading] = useState(false)
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
      setLoading(true)
      const currentUser = {
        email : result.user.email
      }

     saveToken(currentUser,from,navigate)
     setLoading(false)
      
    })
    .catch(e => {
      console.error(e)
      setError('Invalid Email or Password')
    })
  }
  return (
    <div className=" w-full flex justify-center my-10 ">
      {loading && <Loader />}
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Card className=" md:w-[500px] w-96 text-left">
      <h3 className="text-2xl my-4 text-center text-red-800">Login</h3>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              className="border-hidden"
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
          <button type="submit" className="w-full bg-red-800 text-white p-2 rounded-sm">Login</button>
          <small>New to this website?<Link to='/register'><span className="text-red-800">Register</span></Link></small>
          <div className="text-center my-2">
          <span>or <hr/></span>
          </div>
        </form>
        <GoogleLogin/>
      </Card>
    </div>
  );
};

export default Login;
