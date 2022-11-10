
import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authProvider } from "../../contextApi/UserContext";
import logo from "../../assets/images/logo.jpg"
import './Header.css'
import { FaBars, FaUserAlt } from "react-icons/fa";
import { Tooltip } from "flowbite-react";
import { motion } from "framer-motion";

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
            <motion.span className="self-center whitespace-nowrap text-xl font-bold text-red-700"
            initial ={{y: -100}}
            animate = {{y:0}}
            transition = {{delay:.2, type:"spring", stiffness:120}}
            >
              Phroto.
            </motion.span>
          </Link>
        </div>
    <ul className={`md:flex justify-center gap-5 text-md text-gray-700 font-semibold absolute transition-all ease-in-out md:static w-full md:w-auto bg-slate-100 p-2 ${open?'top-24':'top-[-150px]'}`}>
        <motion.li
        whileHover={{scale:1.1 , originx:0}}
        transition ={{type:'spring', stiffness:200}}
        ><NavLink to="/services">Services</NavLink></motion.li>
        <motion.li
        whileHover={{scale:1.1 , originx:0}}
        transition ={{type:'spring', stiffness:200}}
        ><NavLink to="/blog">Blog</NavLink></motion.li>
        {
          user?.uid && 
          <div className="md:flex items-center gap-5"><motion.li
          whileHover={{scale:1.1 , originx:0}}
        transition ={{type:'spring', stiffness:200}}
          ><NavLink to="/myReviews">My Reviews</NavLink></motion.li>
          <motion.li
          whileHover={{scale:1.1 , originx:0}}
          transition ={{type:'spring', stiffness:200}}
          ><NavLink to="/addService">Add Service</NavLink></motion.li></div>
        }
    </ul>
    <div>
      {
        user?.uid?
        <div className="md:flex gap-5 items-center">
          <Tooltip placement="bottom" content={user?.displayName?user.displayName:'userName'}><img className="w-10 rounded-full" src={user.photoURL?user.photoURL:<FaUserAlt/>} alt='User'/></Tooltip>
        <motion.button
         whileHover={{scale:1.1}}
         transition = {{duration:.3}}
        >
        <Link onClick={handleLogout} className='bg-red-800 px-3 py-2 rounded-md text-white'>Logout</Link>
          </motion.button></div>
        :
        <motion.button
        whileHover={{scale:1.1}}
        transition = {{duration:.3}}
        >
          <Link className="bg-red-800 px-3 py-2 rounded-md text-white" to='/login'>Login</Link>
        </motion.button>
      }
    </div>
    </div>
    </div>
  );
};

export default Header;
