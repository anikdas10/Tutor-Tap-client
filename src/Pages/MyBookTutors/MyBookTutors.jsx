import { useEffect, useState } from "react";
import UseAuth from "../../components/customHook/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../components/customHook/UseAxiosSecure";



const MyBookTutors = () => {

    const [tutors,setTutors] = useState([]);
    const {user} = UseAuth();
    const axiosSecure = useAxiosSecure();

     useEffect(() => {
       handleTutorDetails();
     }, []);
     const handleTutorDetails = async () => {
       try {
         const { data } = await axiosSecure.get(
           `/booked-tutors?email=${user?.email}`
         );
         setTutors(data);
       } catch (err) {
         console.log(err);
       }
     };

    //  handle review

    const handleReview =async id =>{
        console.log(id);
        try {
    const { data } = await axiosSecure.post(
      `/booked-tutors`,
      { id },
    );
    // console.log(data);
    if (data.insertedId)
    {
         toast.success("Review successFull")
    }
     
    } catch (err) {
      console.log(err);
    }
    }

     console.log(tutors);
    return (
      <div className="mt-12 md:mt-16 lg:mt-20 container">
        <h2>My booked Tutors</h2>
        <div>
          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">
              Invoices
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="" />
                </colgroup>
                <thead className="dark:bg-gray-300">
                  <tr className="">
                    <th className="p-3 md:text-xl">Image</th>
                    <th className="p-3 md:text-xl">Tutor</th>
                    <th className="p-3 md:text-xl">Language</th>
                    <th className="p-3 md:text-xl">Price</th>
                    <th className="p-3 md:text-xl">Review</th>
                  </tr>
                </thead>
                <tbody>
                  {tutors.map((tutor) => (
                    <tr 
                    key={tutor._id}
                    className="border border-opacity-20 dark:border-gray-300 dark:bg-gray-50 shadow-md ">
                      <td className=" w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32">
                        <img src={tutor?.photo} alt="" className="w-full h-full rounded-full" />
                      </td>
                      <td className="p-3 text-center md:text-lg">
                        <p>{tutor?.name}</p>
                      </td>

                      <td className="p-3 text-center md:text-lg">
                        <p>{tutor?.language}</p>
                        
                      </td>
                      <td className="p-3 text-center md:text-lg">
                        <p>BDT {tutor?.price}</p>
                      </td>
                      <td className="p-3 text-center md:text-lg">
                        <button onClick={()=>handleReview(tutor?.tutorId)} className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 text-center">
                          <span>Review</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyBookTutors;