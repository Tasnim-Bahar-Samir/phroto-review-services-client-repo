import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from "react-photo-view";

const Service = ({ data }) => {
  const { _id, img, details, name, price } = data;

  return (
    <div className="max-w-lg md:h-76 lg:h p-2 border rounded-tl-2xl rounded-tr-2xl hover:shadow-lg">
      <div className="">
        <PhotoProvider>
          <PhotoView src={img}>
          <img src={img} alt="" className="rounded-xl mb-2 md:h-44 w-full " />
          </PhotoView>
        </PhotoProvider>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {details.length > 100 ? details.slice(0, 99) + "..." : details}
        </p>
        <div className="flex justify-between px-3 mt-3">
          <h5>Price: ${price}</h5>
          <Link to={`/details/${_id}`}>
            <button className="flex items-center">
                Details <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
