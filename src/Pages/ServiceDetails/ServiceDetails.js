
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ModalShow from "../../Components/ModalShow";
import Review from "../../Components/Review";
import { authProvider } from "../../contextApi/UserContext";


const ServiceDetails = () => {
  const {user} = useContext(authProvider)
  const { data } = useLoaderData();
  const { _id,img, rating, details, name, price } = data;
  const [visible,setVisible] = useState(false)
  const [star,setStar] = useState(5);
  const [reviews,setReviews] = useState([])
  const [refresh,setRefresh] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?id=${_id}`)
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        setReviews(data.data)
      })
      .catch(err=> console.log(err))
  }, [_id,refresh])
  

  const handleAddReview = (e) => {
    const datefield = new Date()
    e.preventDefault()
    const reveiw = {
      email : user?.email,
      name: user?.displayName,
      img: user?.photoURL,
      text : e.target.text.value,
      serviceName:name,
      serviceId : _id,
      rating:star,
      datefield:datefield
    }
    console.log(reveiw)
    user?.email ?
  
    fetch('http://localhost:5000/reviews',{
      method:'POST',
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify(reveiw)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        toast.success(data.message)
        e.target.reset()
        setRefresh(!refresh)
      }else{
        toast.error(data.error)
      }
    })
    .catch(e => console.log(e))
    :
    setVisible(true)

  };

  return (
    <div>
      <div className="text-center">
        <ModalShow visible = {visible} setVisible = {setVisible}/>
        <img src={img} className="w-full rounded-xl mt-10 mb-4" alt="" />
        <div className="flex justify-between mx-auto mb-2">
          <h5 className="text-2xl font-semibold">{name}</h5>
          <h3 className="flex items-center">
            <FaStar className=" text-yellow-400" />
            {rating}
          </h3>
        </div>
        <h3 className="text-xl my-2 font-semibold">Package Price:${price}</h3>
        <p className="md:w-1/2 mx-auto text-lg leading-8">{details}</p>
      </div>


      {/* reviews */}

        <div className="mt-24 my-16 mx-auto">
          <h2 className="text-2xl font-semibold mb-2">What Clients say about my service:</h2>
        {
          reviews.length > 0 ?
          reviews.map(review => <Review review = {review} key={review._id}/>)
          :
          <h3 className="text-xl ">No Reviews To Show</h3>
        }
        </div>


      {/* add review */}
      <div className=" my-16 mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Leave a feedback</h2>
        <form  onSubmit={handleAddReview}>
          <textarea
            className="border-2 rounded-lg w-full md:w-auto"
            cols=" 50 "
            rows="5"
            placeholder="Write a review"
            name="text"
            required
          ></textarea>
          <div className="flex items-center my-2 gap-2">Rating: <FaStar className=" text-yellow-300"/>
          <select className="rounded-lg" defaultValue={5} onChange={(e)=> setStar(e.target.value)} name="rating" id="" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </div>
          <button className="block bg-slate-900 px-8 py-2 rounded-md text-white ">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
