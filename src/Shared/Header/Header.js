import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authProvider } from "../../contextApi/UserContext";
import logo from "../../assets/images/logo.jpg"

const Header = () => {
  const {user,userLogOut} = useContext(authProvider)
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
      <Navbar className="" fluid={true}>
      
        <Navbar.Brand>
          <Link to='/' className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Photography
            </span>
          </Link>
        </Navbar.Brand>
        <div className="flex  md:order-2">
          {
            user?.email?
            <Dropdown 
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User Photo"
                img={user?.photoURL}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item><Link to='/myReviews'>My Reviews</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
          :
          <Button color='dark'>
            <Link to='/login'>Login</Link>
          </Button>
          }
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to='/services'>Services</NavLink>
          <NavLink to= '/blog'>Blog</NavLink>
          <NavLink to= "/contact">Contact</NavLink>
          <NavLink >{user?.name}</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
