import { Dropdown, Table } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Myreview = ({ data,handleDelete }) => {
  const { _id,serviceName, text, rating } = data;

  
  return (
    <Table.Row className="bg-white w-full dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {serviceName}
      </Table.Cell>
      <Table.Cell>{text}</Table.Cell>
      <Table.Cell>{rating}</Table.Cell>
      <Table.Cell>
        <Dropdown label="actions" arrowIcon={false}>
          <Dropdown.Item><Link to={`/myReviews/edit/${_id}`}>Edit</Link></Dropdown.Item>
          <Dropdown.Item onClick={() => handleDelete(_id)}>Delete</Dropdown.Item>
        </Dropdown>
      </Table.Cell>
    </Table.Row>
  );
};

export default Myreview;
