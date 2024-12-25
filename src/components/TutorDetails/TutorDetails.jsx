import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../customHook/UseAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../customHook/UseAxiosSecure";


const TutorDetails = () => {
    const [tutor,setTutor] = useState([]);
    const {user,theme} = UseAuth();
    const {details} = useParams();
    const axiosSecure = useAxiosSecure();
    // console.log(details)
    const { name, description, photo, language, price, review,email,_id } = tutor;
    useEffect(()=>{
        handleTutorDetails();
    },[])
    const handleTutorDetails = async()=>{

        try{
            const { data } = await axiosSecure.get(
              `/tutor/${details}`
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
        const tutorDetails = {tutorId:_id, photo,language,price,tutorEmail:email,userEmail:user?.email,name};
        // console.log(tutorDetails);


       try {
         const { data } = await axiosSecure.post(
           `/booked-tutors`,
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
      <div
        className={`${
          theme && "bg-[#0F172A] text-white h-screen"
        } pt-12 md:pt-16 lg:pt-20`}
      >
        <div className=" container">
          <h2>Tutor Details</h2>
          {/* another design */}
          <div
            className={`flex items-center justify-between flex-col md:flex-row shadow-lg p-6 rounded-lg border ${theme && "bg-[#0B1120] text-white border-gray-500"}`}
          >
            {/* Tutor Image */}
            <div className="flex flex-col md:flex-row gap-4 md:w-2/3">
              <div className="w-full md:w-32 h-64 md:h-full">
                <img
                  src={photo}
                  alt="Tutor"
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
              {/* Tutor Details */}
              <div className="md:w-3/5">
                <div className="flex items-center ">
                  <h2 className="text-2xl font-bold ">{name}</h2>
                </div>
                <p className="text-sm  mt-1 text-gray-300">Super Tutor</p>
                <p className="text-base mt-2">
                  Language:<strong>{language}</strong>
                </p>
                <p className="text-base text-gray-300">{description}</p>
              </div>
            </div>

            {/* Ratings and Pricing */}
            <div className="flex flex-col  w-full md:w-auto">
              <div className="flex items-center justify-between md:flex-col gap-4 md:gap-0">
                <div className="flex items-center">
                  <span className="text-yellow-500 font-bold text-xl">★ 5</span>
                  <span className="text-lg  ml-2">
                    ({review} reviews)
                  </span>
                </div>
                <div>
                  <p className="text-xl font-semibold  mt-2">
                    BDT {price}
                  </p>
                  <p className="text-sm">50-min lesson</p>
                </div>
              </div>

              <button
                onClick={handleBookTutor}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-lg rounded-md "
              >
                Book trial lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TutorDetails;