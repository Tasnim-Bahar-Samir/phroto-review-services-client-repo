import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import Myreview from "../../Components/Myreview";
import { authProvider } from "../../contextApi/UserContext";

const Myreviwes = () => {
  const { user } = useContext(authProvider);
  const [reviews, setReviews] = useState([]);
  const [refresh,setRefresh] = useState(false)
  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user?.email}`,{
        headers:{
            authorization : localStorage.getItem('user_token')
        }
    })
      .then((res) => res.json())
      .then((data) => setReviews(data.data));
  }, [user?.email,refresh]);

  const handleDelete = (id) =>{
    fetch(`http://localhost:5000/myReviews/${id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data =>{
        if(data.success){
            toast.success(data.message)
            setRefresh(!refresh)
        }else{
            toast.error(data.error)
        }
    })
    .catch(e => console.log(e))
  }
  return (
      <div className="mt-20 bg-white rounded-lg p-10">
        <Helmet>
          <title>My_Reviews</title>
        </Helmet>
        {
          reviews.length > 0?
          <Table>
          <Table.Head>
            <Table.HeadCell>Service name</Table.HeadCell>
            <Table.HeadCell>Review</Table.HeadCell>
            <Table.HeadCell>Rating</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {
                reviews.map(review => <Myreview key={review._id} data = {review} handleDelete ={handleDelete}/>)
            }
          </Table.Body>
        </Table>
        :
        <div className="flex justify-center h-60 items-center"><p>You have not added any reviws</p></div>
        }
        
      </div>
  );
};

export default Myreviwes;
