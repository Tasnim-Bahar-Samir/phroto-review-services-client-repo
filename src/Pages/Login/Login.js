import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password)
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
            <TextInput id="password1" type="password" name="password" required={true} />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Show Password</Label>
          </div>
          <Button type="submit">Login</Button>
          <small>New to this website?<Link to='/register'>Register</Link></small>
        </form>
      </Card>
    </div>
  );
};

export default Login;
