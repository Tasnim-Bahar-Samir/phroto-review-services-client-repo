import { Button, Modal } from "flowbite-react";
import React, { useContext, useState } from "react";
import { FaLeaf, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ModalShow from "../../Components/ModalShow";
import { authProvider } from "../../contextApi/UserContext";

const ServiceDetails = () => {
  const {user} = useContext(authProvider)
  const { data } = useLoaderData();
  const { img, rating, details, name, price } = data;
  const [visible,setVisible] = useState(false)


  const handleAddReview = (e) => {
    e.preventDefault()
    user?.email ?
    console.log(e.target)
    
    :
    setVisible(true)

  };

  return (
    <div>
      <div className="text-center">
        <ModalShow visible = {visible} setVisible = {setVisible}/>
        <img src={img} className="w-full rounded-xl mt-10 mb-4" alt="" />
        <div className="flex justify-between mx-8">
          <h5 className="text-2xl font-semibold">{name}</h5>
          <h3 className="flex items-center">
            <FaStar className=" text-yellow-400" />
            {rating}
          </h3>
        </div>
        <h3 className="text-xl my-2 font-semibold">Package Price:${price}</h3>
        <p className="md:w-1/2 mx-auto text-lg leading-8">{details}</p>
      </div>
      <div className="my-10">
        <p>Add A Review</p>
        <form  onSubmit={handleAddReview}>
          <textarea
            className="border-2 rounded-lg w-full md:w-auto"
            cols=" 50 "
            rows="5"
            placeholder="Write a review"
            required
          ></textarea>
          {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
          <button className="block bg-slate-900 px-8 py-2 rounded-md text-white ">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
