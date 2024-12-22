import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../customHook/UseAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const TutorDetails = () => {
    const [tutor,setTutor] = useState([]);
    const {user} = UseAuth();
    const {details} = useParams();
    // console.log(details)
    const { name, description, photo, language, price, review,email,_id } = tutor;
    useEffect(()=>{
        handleTutorDetails();
    },[])
    const handleTutorDetails = async()=>{
        try{
            const { data } = await axios.get(
              `${import.meta.env.VITE_SERVER_KEY}/tutor/${details}`
            );
            setTutor(data);
              
        }
        catch(err){
            console.log(err);
        }
    }

    const handleBookTutor = async()=>{
        if(user?.email === email)
        {
            return toast.error("Tutor Can't book!!")
        }
        const tutorDetails = {tutorId:_id, photo,language,price,tutorEmail:email,userEmail:user?.email};
        // console.log(tutorDetails);


       try {
         const { data } = await axios.post(
           `${import.meta.env.VITE_SERVER_KEY}/booked-tutors`,
           tutorDetails
         );
        //  console.log(data);
         if (data.insertedId) {
           Swal.fire({
             title: "Tutor booking Successful!",

             icon: "success",
           });
         }
       } catch (err) {
         console.log(err);
       }
    }
    return (
      <div className="mt-12 md:mt-16 lg:mt-20 container">
        <h2>Tutor Details</h2>
        {/* another design */}
        <div className="flex items-center justify-between flex-col md:flex-row shadow-lg p-6 rounded-lg border">
          {/* Tutor Image */}
          <div  className="flex flex-col md:flex-row gap-4 md:w-2/3">
            <div className="w-full md:w-32 h-64 md:h-full">
              <img
                src={photo}
                alt="Tutor"
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
            {/* Tutor Details */}
            <div className="md:w-1/2">
              <div className="flex items-center ">
                <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
              </div>
              <p className="text-sm text-gray-500 mt-1">Super Tutor</p>
              <p className="text-base text-gray-600 mt-2">
                Language:<strong>{language}</strong> 
              </p>
              <p className="text-base text-gray-600">
                {description}
              </p>
            </div>
          </div>

          {/* Ratings and Pricing */}
          <div className="flex flex-col  w-full md:w-auto">
            <div className="flex items-center justify-between md:flex-col gap-4 md:gap-0">
              <div className="flex items-center">
                <span className="text-yellow-500 font-bold text-xl">★ 5</span>
                <span className="text-lg text-gray-500 ml-2">({review} reviews)</span>
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800 mt-2">
                  BDT {price}
                </p>
                <p className="text-sm text-gray-500">50-min lesson</p>
              </div>
            </div>

            <button onClick={handleBookTutor} className="mt-6 px-6 py-3 bg-pink-500 text-white text-lg font-medium rounded-lg hover:bg-pink-600 transition">
              Book trial lesson
            </button>
          </div>
        </div>
      </div>
    );
};

export default TutorDetails;