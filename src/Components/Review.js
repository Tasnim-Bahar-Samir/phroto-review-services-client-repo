import { Avatar } from "flowbite-react";
import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ review }) => {
  const { email, img, name, text, rating } = review;
  return (
    <div>
      <div className="border-2 bg-slate-100 rounded-md mb-3 p-5">
        <div className="flex gap-2">
          <Avatar
            img={img}
            rounded={true}
          />
          <div>
            <h4 className="text-xl">{email}</h4>
            <h5 className="text-lg">{name}</h5>
            <h3 className="flex items-center text-xl my-2">Rating: <FaStar className="text-yellow-400"/>{rating}</h3>
          </div>
        </div>
        <p className="mt-3">{text}</p>
      </div>
    </div>
  );
};

export default Review;
