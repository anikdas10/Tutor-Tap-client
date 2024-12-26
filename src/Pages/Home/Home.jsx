import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
import UseAuth from "../../components/customHook/UseAuth";
import TuitionTypes from "../../components/TutionTypes/TuitionTypes";
import Stats from "../../components/Stats/Stats";
import Subscribe from "../../components/Subscribe/Subscribe";


const Home = () => {

    const {theme} = UseAuth();
    
    return (
      <div className={`${theme && "bg-[#0F172A]"}`}>
        <Slider/>
        <Stats/>
        <Category/>
        <TuitionTypes/>
        <Subscribe/>
      </div>
    );
};

export default Home;