import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../components/customHook/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../components/customHook/UseAxiosSecure";

const AddTutorials = () => {
  const { user ,theme} = UseAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = Object.fromEntries(new FormData(form));
    formData.review = 0;
  
    try {
    const {data} = await  axiosSecure.post(`/tutors`, formData);
    // console.log(data);
    if (data.insertedId)
    {
         Swal.fire({
           title: "Tutor added Successful!",

           icon: "success",
         });
         navigate("/my-tutorials")
    }
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`${
        theme && "bg-[#0F172A] text-white"
      } pt-12 md:pt-16 lg:pt-20`}
    >
      <div
        className={`w-full max-w-lg overflow-hidden rounded-lg shadow-lg  border  mx-auto ${
          theme && "bg-[#0B1120] border-gray-700"
        }`}
      >
        <div className="w-full px-6 py-8 md:px-8">
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <div className="text-xl font-bold text-center uppercase  hover:underline">
              Add Tutorials
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleAdd}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
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
                className="block w-full px-4 py-2 text-gray-700 border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
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
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Image
              </label>
              <input
                name="photo"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="loggingPassword"
              >
                Language
              </label>
              <select
                name="language"
                defaultValue={"Pick your language"}
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
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Price
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="price"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Description
              </label>
              <textarea
                id="LoggingEmailAddress"
                autoComplete="email"
                name="description"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm md:text-lg font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white
                rounded-lg "
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTutorials;
