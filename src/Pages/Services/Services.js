import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import Service from "../../Components/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://awesome-photography-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="w-full ">
      <Helmet>
        <title>Services</title>
      </Helmet>
      <h3 className="text-center text-4xl my-3 text-red-800">All Services</h3>
      {loading && <Loader />}
      <div className="grid grid-cols-2 gap-5 my-10 w-full justify-center lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service._id} data={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
