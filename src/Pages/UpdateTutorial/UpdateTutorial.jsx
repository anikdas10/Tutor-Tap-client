import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../components/customHook/UseAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../components/customHook/UseAxiosSecure";

const UpdateTutorial = () => {
    const [tutor,setTutor] = useState([]);
    const navigate = useNavigate();
    const {user,theme} = UseAuth();
    const {id} = useParams();
    // console.log(id);
    const axiosSecure = useAxiosSecure();


    const {description, photo, language, price, review } = tutor;
    useEffect(() => {
      handleTutorDetails();
    }, []);
    const handleTutorDetails = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/tutor/${id}`
        );
        setTutor(data);
      } catch (err) {
        console.log(err);
      }
    };

    console.log(review);

    const handleUpdate = async e =>{
        e.preventDefault();
        const form = e.target;
        const formData = Object.fromEntries(new FormData(form))
        formData.review = review;
        console.log(formData);

        // update operation
         try {
           const { data } = await axiosSecure.put(
             `/tutors/${id}`,
             formData
           );
           console.log(data);
           if (data.modifiedCount) {
             Swal.fire({
               title: "Tutor update Successful!",

               icon: "success",
             });
             navigate("/my-tutorials");
           }
         } catch (err) {
           console.log(err);
         }

    }
    return (
      <div className={`${theme && "bg-[#0B172A] text-white"}`}>
        <div className="pt-12 md:pt-16 lg:pt-20 container">
          <div className=" w-full max-w-lg overflow-hidden rounded-lg shadow-lg  border  mx-auto ">
            <div className="w-full px-6 py-8 md:px-8">
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b  lg:w-1/4"></span>

                <div className="text-xl font-bold text-center uppercase  hover:underline">
                  Update Tutorials
                </div>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
              </div>
              <form onSubmit={handleUpdate}>
                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm font-medium "
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    autoComplete="name"
                    name="name"
                    value={user?.displayName}
                    readOnly
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm font-medium "
                    htmlFor="photo"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    value={user?.email}
                    readOnly
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="LoggingEmailAddress"
                  >
                    Image
                  </label>
                  <input
                    name="photo"
                    defaultValue={photo}
                    required
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                  />
                </div>

                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm font-medium "
                    required
                    htmlFor="loggingPassword"
                  >
                    Language
                  </label>
                  <select
                    name="language"
                    defaultValue={language}
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300 "
                  >
                    <option disabled>Pick your language</option>
                    <option>Bangla</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>German</option>
                    <option>French</option>
                    <option>Chinese</option>
                    <option>Japanese</option>
                    <option>Arabic</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm font-medium "
                    
                    htmlFor="LoggingEmailAddress"
                  >
                    Price
                  </label>
                  <input
                    id="LoggingEmailAddress"
                    autoComplete="email"
                    required
                    name="price"
                    defaultValue={price}
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="number"
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="LoggingEmailAddress"
                  >
                    Description
                  </label>
                  <textarea
                    defaultValue={description}
                    name="description"
                    required
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    rows={6}
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white
                rounded-lg md:text-lg"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateTutorial;