import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
import UseAuth from "../../components/customHook/UseAuth";


const Home = () => {

    const {theme} = UseAuth();
    
    return (
      <div className={`${theme && "bg-[#0F172A]"}`}>
        <Slider></Slider>
        <Category></Category>
      </div>
    );
};

export default Home;