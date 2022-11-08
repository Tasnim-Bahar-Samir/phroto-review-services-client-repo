import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authProvider } from "../../contextApi/UserContext";

const Header = () => {
  const {user} = useContext(authProvider)
  return (
    <div>
      <Navbar className="flex justify-between w-full">
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown 
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
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
