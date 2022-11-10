import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from "react-photo-view";

const Service = ({ data }) => {
  const { _id, img, details, name, price } = data;

  return (
    <div className="max-w-lg md:h-76 lg:h p-2 border rounded-xl bg-white rounded-tr-2xl hover:shadow-lg">
      
      <div className="">
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
        <div className="">
          <Link to={`/details/${_id}`}>
            <button  className="flex items-center my-2 bg-red-800 text-white px-4 py-2 rounded-sm">
                Details <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
