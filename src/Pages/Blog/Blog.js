import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className=" mb-16 md:mx-32">
      <Helmet>
        <title>Blog_Page</title>
      </Helmet>
      <h2 className="text-center text-3xl text-red-800 my-8">FAQ</h2>
      <div className="p-5 bg-white rounded-md mb-5 shadow-sm">
        <h3 className="text-2xl">
          What is the difference between SQL and NoSQL?
        </h3>
        <p className=" leading-8 mt-5 text-gray-600">
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object.It is hugely
          used for making api's secured.The purpose of using JWT is not to hide
          data but to ensure the authenticity of the data. JWT is signed and
          encoded, not encrypted. JWT is a token based stateless authentication
          mechanism. Since it is a client-side based stateless session, server
          doesn't have to completely rely on a datastore(database) to save
          session information.
        </p>
      </div>
      <div className="p-5 bg-white rounded-md mb-5 shadow-sm">
        <h3 className="text-2xl">What is JWT, and how does it work?</h3>
        <p className=" leading-8 mt-5 text-gray-600">
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON.
        </p>
      </div>
      <div className="p-5 bg-white rounded-md mb-5 shadow-sm">
        <h3 className="text-2xl">What is the difference between javascript and NodeJS?</h3>
        <p className=" leading-8 mt-5 text-gray-600">
          The main difference between javascript and NodeJs is that javascript is a programming language. But nodeJs is not a language it is javascript runtime. It provide the environment to run the javascript in server.It is an interpreter or execution environment for the JavaScript programming language.
        </p>
      </div>
      <div className="p-5 bg-white rounded-md mb-5 shadow-sm">
        <h3 className="text-2xl">How does NodeJS handle multiple requests at the same time?</h3>
        <p className=" leading-8 mt-5 text-gray-600">
        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
        </p>
      </div>
    </div>
  );
};

export default Blog;
