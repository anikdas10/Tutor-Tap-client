import { Link } from "react-router-dom";
import UseAuth from "../../components/customHook/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddTutorials = () => {
  const { user } = UseAuth();

  const handleAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = Object.fromEntries(new FormData(form));
    formData.review = 0;
    // console.log(formData);

    console.log(import.meta.env.VITE_SERVER_KEY);
    try {
    const {data} = await  axios.post(`${import.meta.env.VITE_SERVER_KEY}/tutors`, formData);
    // console.log(data);
    if (data.insertedId)
    {
         Swal.fire({
           title: "Tutor added Successful!",

           icon: "success",
         });
    }
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-12 md:mt-16 lg:mt-20">
      <div className=" w-full max-w-lg overflow-hidden bg-white rounded-lg shadow-lg  border  mx-auto ">
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
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
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
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
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
