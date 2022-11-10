import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Service from "../../Components/Service";
import About from "./About/About";
import Banner from "./Banner/Banner";
import RecentWork from "./RecentWork/RecentWork";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://awesome-photography-server.vercel.app/limitedServices")
      .then((res) => res.json())
      .then((data) => setServices(data.data))
      .catch((e) => console.log(e));
  }, []);
  console.log(services);
  return (
    <div>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Phroto_Home</title>
        </Helmet>
      </div>

      {/* Banner section  */}
      <div className="mb-10">
        <Banner />
      </div>
      <div className="text-center">
        <h2 className="text-2xl text-center text-red-800 my-3">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 mx-auto">
          {services.map((service) => (
            <Service key={service._id} data={service} />
          ))}
        </div>
        <button className="px-3 py-2 bg-slate-900 text-white mt-5 hover:text-white">
          <Link to="/services">More Services</Link>
        </button>
      </div>

      {/* about section  */}
      <div className="mt-24 mb-24 md:mb-44">
        <h4 className="text-center text-xl text-red-800 mb-2 font-semibold">
          About Me
        </h4>
        <About />
      </div>

      {/* recent work */}
      <div className="mb-10">
        <h4 className="text-center text-xl text-red-800 mb-2 font-semibold">
          Recent Clickz
        </h4>
        <RecentWork />
      </div>
    </div>
  );
};

export default Home;
