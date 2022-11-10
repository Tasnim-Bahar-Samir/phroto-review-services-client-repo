import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-slate-200 w-full h-56 flex items-center justify-center text-center">
      <div>
        <p className="text-md font-semibold">
          ©All Rights Reserved <br /> 2022-2025
        </p>
        
        <div className="flex gap-3 mt-4 ml-5">
            <Link to="https://www.facebook.com/profile.php?id=100045078463296" target='_blank'><FaFacebook/></Link>
            <a href="https://www.twitter.com" target='_blank'><FaTwitter/></a>
            <a href="https://github.com/Tasnim-Bahar-Samir" target='_blank'><FaGithub/></a>
            <a href="https://www.instagram.com" target='_blank'><FaInstagram/></a>
        </div>
        </div>
    </div>
  );
};

export default Footer;
