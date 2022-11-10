import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from "react-photo-view";
import { motion } from "framer-motion";

const Service = ({ data }) => {
  const { _id, img, details, name, price } = data;

  return (
    <motion.div className="max-w-lg md:h-76 lg:h p-2 border rounded-xl bg-white rounded-tr-2xl"
    
    whileHover={{y:-10}}
    transition = {{duration:.5}}
    initial = {{y: 100 ,opacity:.5}}
    whileInView = {{y:0 , opacity:1}}
    >
      
      <div className="text-center">
        <PhotoProvider>
          <PhotoView src={img}>
          <img src={img} alt="" className="rounded-xl mb-2 md:h-52 w-full " />
          </PhotoView>
        </PhotoProvider>
        
        <h5>Price: <span className="text-red-800 text-lg font-semibold">${price}/d</span></h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 w-full">
          {details.length > 100 ? details.slice(0, 99) + "..." : details}
        </p>
        <div className="w-full ">
          <Link to={`/details/${_id}`}>
            <button  className="justify-center flex items-center my-4 bg-red-800 text-white w-2/3 px-4 py-2 rounded-sm mx-auto">
                Details <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
