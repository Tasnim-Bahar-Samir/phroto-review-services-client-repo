import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import Loader from "../../Components/Loader";
import Myreview from "../../Components/Myreview";
import { authProvider } from "../../contextApi/UserContext";

const Myreviwes = () => {
  const {userLogOut} = useContext(authProvider)
  const { user } = useContext(authProvider);
  const [reviews, setReviews] = useState([]);
  const [refresh,setRefresh] = useState(false)
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`https://awesome-photography-server.vercel.app/myReviews?email=${user?.email}`,{
        headers:{
            authorization : localStorage.getItem('user_token')
        }
    })
      .then((res) =>{
        if(res.status == 401 || res.status == 403){
          return userLogOut()
        }
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setReviews(data.data)
        setLoading(false);
      })
      .catch(e => console.log(e))
  }, [user?.email,refresh])
  
  const handleDelete = (id) =>{
    fetch(`https://awesome-photography-server.vercel.app/myReviews/${id}`,{
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
      <div className="mt-20 bg-white my-16 rounded-lg p-10">
        {loading && <Loader/>}
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
        !loading&&
        <div className="flex justify-center h-60 items-center"><p>You have not added any reviws</p></div>
        }
        
      </div>
  );
};

export default Myreviwes;
