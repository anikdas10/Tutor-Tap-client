import axios from "axios";
import { useEffect, useState } from "react";
import TutorCard from "../../components/TutorCard/TutorCard";


const FindTutors = () => {
    const [tutors,setTutors] = useState([]);

    useEffect(()=>{
        axios
          .get(`${import.meta.env.VITE_SERVER_KEY}/tutors`)
          .then(res => setTutors(res.data))
          .catch(err => console.error(err));
    },[])
    console.log(tutors);
    return (
        <div className="mt-12 md:mt-16 lg:mt-20 container">
            <h2>Find Tutors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    tutors.map(tutor=><TutorCard key={tutor._id} tutor={tutor}/>)
                }
            </div>
        </div>
    );
};

export default FindTutors;