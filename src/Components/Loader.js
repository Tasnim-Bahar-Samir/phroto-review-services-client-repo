import { Spinner } from "flowbite-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex mt-10 justify-center">
      <Spinner color="success" aria-label="Success spinner example" />
    </div>
  );
};

export default Loader;
