import React, { useEffect, useState } from 'react';
import TutorCard from '../../components/TutorCard/TutorCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UseAuth from '../../components/customHook/UseAuth';
import { VscLightbulb } from 'react-icons/vsc';

const TutorsByCategory = () => {
    const [tutors, setTutors] = useState([]);
    const {theme} = UseAuth();

    const { category } = useParams();
    // console.log(category);

    useEffect(() => {
      const loadingData= async ()=>{
      try{
        const {data}=await  axios
          .get(
            `${import.meta.env.VITE_SERVER_KEY}/tutors?category=${category}`
          )
          setTutors(data)
        }
      catch(err){
        console.log(err);
      }          
      }
      loadingData();
    }, []);
    // console.log(tutors);
    return (
      <div
        className={`${
          theme && "bg-[#0F172A] text-white"
        } pt-12 md:pt-16 lg:pt-20 h-screen`}
      >
        <div className=" container">
          <h2>Find Tutors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tutors.map((tutor) => (
              <TutorCard key={tutor._id} tutor={tutor} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default TutorsByCategory;