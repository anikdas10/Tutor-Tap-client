import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../customHook/UseAuth";

const Stats = () => {

const [tutors, setTutors] = useState([]);
const [userCount,setUserCount] = useState({});
const {theme} = UseAuth();

 useEffect(() => {
    
   const loadingData = async () => {
     try {
       const { data } = await axios.get(
         `${import.meta.env.VITE_SERVER_KEY}/tutors`
       );
       setTutors(data);
     } catch (err) {
       console.log(err);
     }
   };
  

   loadingData();
   
  
 }, []);

 useEffect(()=>{
     const loadingUser = async () => {
       try {
         const  {data}  = await axios.get(
           `${import.meta.env.VITE_SERVER_KEY}/totalUser`
         );
         setUserCount(data)
       } catch (err) {
         console.log(err);
       }
     };

     loadingUser();

 },[])

        const totalValue = tutors.reduce((sum, tutor) => sum + tutor.review, 0);
 console.log(userCount);

    return (
      <div className="container mt-16">
        <div className={`${theme && "text-white"}`}>
          <div className="flex items-center justify-between md:w-4/5 mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-xl md:text2xl lg:text-4xl">
                {tutors.length} +
              </h2>
              <p>Experienced tutors</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-xl md:text-2xl lg:text-4xl">
                {totalValue} +
              </h2>
              <p>5-star tutor reviews</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-xl md:text-2xl lg:text-4xl">9 +</h2>
              <p>Subjects taught</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-xl md:text-2xl lg:text-4xl">
                {userCount.result} +
              </h2>
              <p>Tutor Nationalities</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Stats;