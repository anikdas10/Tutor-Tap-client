import axios from "axios";
import { useEffect, useState } from "react";
import TutorCard from "../../components/TutorCard/TutorCard";
import UseAuth from "../../components/customHook/UseAuth";



const FindTutors = () => {
    const [tutors,setTutors] = useState([]);
    const [search,setSearch] = useState("");

    const {theme} = UseAuth();

    useEffect(()=>{
        const loadingData = async()=>{
            try{
              const {data}=await  axios
          .get(`${import.meta.env.VITE_SERVER_KEY}/tutors?search=${search}`,{withCredentials:true})
          setTutors(data)
            }
            catch(err){
                console.log(err);
            }
        }
        loadingData();
    },[search])
    // console.log(tutors);
    const handleSearch = e =>{
        e.preventDefault();
        setSearch(e.target.search.value);
        
    }
    return (
      <div
        className={`pt-12 md:pt-16 lg:pt-20 ${
          theme && "bg-[#0F172A] text-white"
        }`}
      >
        <div className=" container">
          <div className="max-w-xl mx-auto mb-8">
            <form onSubmit={handleSearch}>
              <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 ">
                <input
                  className="px-6 py-2 w-4/6 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent rounded-l-lg"
                  type="text"
                  name="search"
                  placeholder="Search by Language"
                  aria-label="Enter Job Title"
                />

                <button
                  className="px-1 w-2/6 md:px-6 py-3 text-sm font-medium 
                bg-gradient-to-r from-purple-500 to-blue-500 text-white
                rounded-r-lg
                "
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tutors.map((tutor) => (
              <TutorCard key={tutor._id} tutor={tutor} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default FindTutors;