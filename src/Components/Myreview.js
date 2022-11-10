import { Table } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Myreview = ({ data,handleDelete }) => {
  const { _id,serviceName, text, rating } = data;

  
  return (
    <Table.Row className="bg-white w-full dark:border-gray-700 dark:bg-gray-800 py-16">
      
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {serviceName}
      </Table.Cell>
      <Table.Cell>{text}</Table.Cell>
      <Table.Cell>{rating}</Table.Cell>
      <Table.Cell className="flex gap-5">
      <Link className="text-md font-bold" to={`/myReviews/edit/${_id}`}>Edit</Link>
      <button className="text-red-600 text-md font-bold" onClick={() => handleDelete(_id)}>Delete</button>
      </Table.Cell>
    </Table.Row>
  );
};

export default Myreview;
