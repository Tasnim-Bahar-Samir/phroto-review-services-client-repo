import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const EditReview = () => {
    const {id} = useParams();
    console.log(id)
    const[review,setReview] = useState([])
    const [star,setStar] = useState(5)
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews/${id}`)
        .then(res => res.json())
        .then(data => setReview(data.data))
    },[id])
    console.log(review)

    const handleEdit= (e)=>{
        e.preventDefault()

        const review = {
            text : e.target.text.value,
            rating: star
        }
        fetch(`http://localhost:5000/myReviews/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.success){
                toast.success(data.message)
                navigate('/myReviews')
            }else{
                toast.error(data.error)
            }
        })
        .catch(e => console.log(e))
        console.log(review)

    }
  return (
    <div>
      <Helmet>
        <title>Review-Edit</title>
      </Helmet>
      <div className="max-w-sm mx-auto mt-10">
        <Card>
          <form onSubmit={handleEdit} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Service Name" />
              </div>
              <TextInput
                id="email1"
                type="text"
                defaultValue={review.serviceName}
                readOnly
              />
            </div>
            <textarea name= 'text' defaultValue={review.text}  id="" className="w-full" rows="10"></textarea>
            <div className="flex items-center my-2 gap-2">Rating: <FaStar className=" text-yellow-300"/>
          <select className="rounded-lg" defaultValue={5} onChange={(e)=> setStar(e.target.value)} name="rating" id="" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </div>
            <Button type="submit" >Update Changes</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default EditReview;
