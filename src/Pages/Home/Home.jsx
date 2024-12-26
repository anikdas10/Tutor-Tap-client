import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
import UseAuth from "../../components/customHook/UseAuth";
import TuitionTypes from "../../components/TutionTypes/TuitionTypes";


const Home = () => {

    const {theme} = UseAuth();
    
    return (
      <div className={`${theme && "bg-[#0F172A]"}`}>
        <Slider></Slider>
        <Category></Category>
        <TuitionTypes/>
      </div>
    );
};

export default Home;