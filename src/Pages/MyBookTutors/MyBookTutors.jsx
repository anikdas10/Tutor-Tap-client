import { useEffect, useState } from "react";
import UseAuth from "../../components/customHook/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../components/customHook/UseAxiosSecure";



const MyBookTutors = () => {

    const [tutors,setTutors] = useState([]);
    const {user,theme} = UseAuth();
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

    //  console.log(tutors);
    return (
      <div
        className={`${
          theme && "bg-[#0F172A] text-white min-h-[calc(100vh-300px)]"
        } pt-12 md:pt-16 lg:pt-20`}
      >
        <div className=" container">
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl my-5">My booked Tutors</h2>
          <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
    
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
                        className={`border border-opacity-20 dark:border-gray-300 dark:bg-gray-50 shadow-md ${theme && "bg-[#0B1120]"}`}
                      >
                        <td className=" w-20 md:w-28 lg:w-32 h-20 md:h-28 lg:h-32 p-4">
                          <img
                            src={tutor?.photo}
                            alt=""
                            className="w-full h-full rounded-full"
                          />
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
                          <button
                            onClick={() => handleReview(tutor?.tutorId)}
                            className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 text-center"
                          >
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
      </div>
    );
};

export default MyBookTutors;