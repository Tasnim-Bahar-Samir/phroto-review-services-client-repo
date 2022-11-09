import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  const { img, rating, details, name, price } = data;
  console.log(data);

  return (
    <div>
      <div className="text-center">
        <img src={img} className="w-full rounded-xl mt-10 mb-4" alt="" />
        <div className="flex justify-between mx-8">
          <h5 className="text-2xl font-semibold">{name}</h5>
          <h3 className="flex items-center">
            <FaStar className=" text-yellow-400" />
            {rating}
          </h3>
        </div>
        <h3 className="text-xl my-2 font-semibold">Package Price:{price}</h3>
        <p className="md:w-1/2 mx-auto text-lg leading-8">{details}</p>
      </div>
      <div className="my-10">
        <p>Add A Review</p>
        <textarea className="border-2 rounded-lg" cols=" 10 "></textarea>
        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
        <button className="block bg-slate-900 px-8 py-2 rounded-md text-white ">Add</button>

      </div>
    </div>
  );
};

export default ServiceDetails;
