import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner text-white flex items-center rounded-sm">
      <div className="ml-10 xl:ml-16">
        <h1 className="md:text-6xl text-3xl font-bold">
          <span className=" text-red-700">Capture </span> All The <br /> Best Experiences
        </h1>
        <p className="mt-3">Let's capture all the hapiness together <br /> Photography is the beauty of life capture!</p>
      </div>
    </div>
  );
};

export default Banner;
