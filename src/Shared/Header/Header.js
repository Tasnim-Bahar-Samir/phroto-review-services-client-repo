
import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authProvider } from "../../contextApi/UserContext";
import logo from "../../assets/images/logo.jpg"
import './Header.css'
import { FaBars, FaUserAlt } from "react-icons/fa";
import { Tooltip } from "flowbite-react";

const Header = () => {
  const {user,userLogOut} = useContext(authProvider)
  const[open,setOpen] =useState(false);
  const navigate = useNavigate()

  const handleLogout = ()=>{
    userLogOut()
    .then(()=>{
      navigate('/login')
    })
    .catch(e => console.error(e))
  }
  return (
    <div>
      <div className=' bg-slate-100 flex justify-between px-10 h-24 items-center shadow-md'>
        <FaBars onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden"/>
        <div>
        <Link to='/' className="flex items-center pr-10">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9 bg-white"
              alt="Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-bold text-red-700">
              Phroto.
            </span>
          </Link>
        </div>
    <ul className={`md:flex justify-center gap-5 text-md text-gray-700 font-semibold absolute transition-all ease-in-out md:static w-full md:w-auto bg-slate-100 p-2 ${open?'top-24':'top-[-150px]'}`}>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        {
          user?.uid && 
          <div className="md:flex items-center gap-5"><li><NavLink to="/myReviews">My Reviews</NavLink></li>
          <li><NavLink to="/addService">Add Service</NavLink></li></div>
        }
    </ul>
    <div>
      {
        user?.uid?
        <div className="md:flex gap-5 items-center">
          <Tooltip placement="bottom" content={user?.displayName?user.displayName:'userName'}><img className="w-10 rounded-full" src={user.photoURL?user.photoURL:<FaUserAlt/>} alt='User'/></Tooltip>
        <Link onClick={handleLogout} className='bg-red-800 px-3 py-2 rounded-md text-white'>Logout</Link></div>
        :
        <Link className="bg-red-800 px-3 py-2 rounded-md text-white" to='/login'>Login</Link>
      }
    </div>
    </div>
    </div>
  );
};

export default Header;
