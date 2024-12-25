import { useEffect, useState } from "react";
import UseAuth from "../../components/customHook/UseAuth";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../components/customHook/UseAxiosSecure";


const MyTutorials = () => {
     const [tutors, setTutors] = useState([]);
     const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

     useEffect(() => {
       handleTutorDetails();
     }, []);
     const handleTutorDetails = async () => {
       try {
         const { data } = await axiosSecure.get(
           `/tutors/${
             user?.email
           }`,);
         setTutors(data);
       } catch (err) {
         console.log(err);
       }
     };
    //  console.log(tutors);
    const handleDelete = (id)=>{
        console.log(id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            try {
              axiosSecure.delete(`/tutors/${id}`);
              Swal.fire({
                title: "Deleted!",
                text: "Tutor has been deleted!",
                icon: "success",
              });
            } catch (err) {
                 console.log(err);
            } 
          }
        });
    }
    return (
      <div className="mt-12 md:mt-16 lg:mt-20 container">
        <h2>My Tutorials page</h2>
        <div>
          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">
              Invoices
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-[10px]">
                <thead className="dark:bg-gray-300 text-sm lg:text-lg">
                  <tr className="text-center">
                    <th className="p-3 ">Image</th>
                    <th className="p-3">Tutor</th>
                    <th className="p-3">Language</th>
                    <th className="p-3 ">Price</th>
                    <th className="p-3 ">Description</th>
                    <th className="p-3">Review</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tutors.map((tutor) => (
                    <tr
                      key={tutor?._id}
                      className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 text-center md:text-sm lg:text-lg"
                    >
                      <td className=" w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32">
                        <img
                          src={tutor?.photo}
                          alt=""
                          className="w-full h-full rounded-full"
                        />
                      </td>
                      <td className="p-3">
                        <p>{tutor?.name}</p>
                      </td>
                      <td className="p-3">{tutor?.language}</td>
                      <td className="p-3">BDT {tutor?.price}</td>
                      <td className="p-3">
                        {tutor?.description.substring(0, 30)} ...
                      </td>
                      <td className="p-3">{tutor?.review}</td>
                      <td className="p-3 ">
                        <div className="flex items-center gap-4 justify-center">
                          <button
                            onClick={() => handleDelete(tutor?._id)}
                            className="text-lg"
                          >
                            <MdDeleteForever />
                          </button>
                          <Link to={`/update/${tutor?._id}`}>
                            <button className="text-sm">
                              <FaRegPenToSquare />
                            </button>
                          </Link>
                        </div>
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

export default MyTutorials;