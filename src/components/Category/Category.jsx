import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import UseAuth from '../customHook/UseAuth';

import img1 from "./../../assets/images/icons/clock-tower.png"
import img2 from "./../../assets/images/icons/building-tower.png"
import img3 from "./../../assets/images/icons/landmark.png"
import img4 from "./../../assets/images/icons/condominium.png"
import img5 from "./../../assets/images/icons/skyscraper.png"
import img6 from "./../../assets/images/icons/building.png"
import img7 from "./../../assets/images/icons/jesus.png"
import img8 from "./../../assets/images/icons/parthenon.png"
import img9 from "./../../assets/images/icons/poland.png"

const Category = () => {
    const {theme} = UseAuth();
    return (
      <div className="container grid grid-cols-2 md:grid-cols-3  gap-2 py-16">
        <h2
          className={`col-span-2 md:col-span-3 text-center font-bold text-xl md:text-2xl lg:text-3xl mb-3 ${
            theme && "text-white"
          }`}
        >
          Category
        </h2>
        {/* English */}
        <Link to="/find-tutors/English">
          <div
            className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${
              theme && "text-white bg-[#0B1120] border-gray-500 opacity-80"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Replace with your icon */}
                <img src={img1} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">English tutors</h2>
              </div>
            </div>
            <div className="text-lg">
              <IoIosArrowForward />
            </div>
          </div>
        </Link>

        <Link to="/find-tutors/Spanish">
          <div
            className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${
              theme && "text-white bg-[#0B1120] border-gray-500 opacity-80"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Replace with your icon */}
                <img src={img2} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">Spanish tutors</h2>
              </div>
            </div>
            <div className="text-lg">
              <IoIosArrowForward />
            </div>
          </div>
        </Link>
        <Link to="/find-tutors/French">
          <div
            className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${
              theme && "text-white bg-[#0B1120] border-gray-500 opacity-80"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Replace with your icon */}
                <img src={img3} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">French tutors</h2>
              </div>
            </div>
            <div className="text-lg">
              <IoIosArrowForward />
            </div>
          </div>
        </Link>
        <Link to="/find-tutors/German">
          <div
            className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${
              theme && "text-white bg-[#0B1120] border-gray-500 opacity-80"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Replace with your icon */}
                <img src={img4} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">German tutors</h2>
              </div>
            </div>
            <div className="text-lg">
              <IoIosArrowForward />
            </div>
          </div>
        </Link>
        <Link to="/find-tutors/Italian">
          <div
            className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${
              theme && "text-white bg-[#0B1120] border-gray-500 opacity-80"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Replace with your icon */}
                <img src={img5} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">Italian tutors</h2>
              </div>
            </div>
            <div className="text-lg">
              <IoIosArrowForward />
            </div>
          </div>
        </Link>
        <Link to="/find-tutors/Bangla">
          <div
            className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${
              theme && "text-white bg-[#0B1120] border-gray-500 opacity-80"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Replace with your icon */}
                <img src={img6} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">Bangla tutors</h2>
              </div>
            </div>
            <div className="text-lg">
              <IoIosArrowForward />
            </div>
          </div>
        </Link>
        <Link to="/Japanese">
          <div
            className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${
              theme && "text-white bg-[#0B1120] border-gray-500 opacity-80"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Replace with your icon */}
                <img src={img7} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">Japanese tutors</h2>
              </div>
            </div>
            <div className="text-lg">
              <IoIosArrowForward />
            </div>
          </div>
        </Link>
        <Link to="/find-tutors/Portugal">
          <div
            className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${
              theme && "text-white bg-[#0B1120] border-gray-500 opacity-80"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Replace with your icon */}
                <img src={img8} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">Portugal tutors</h2>
              </div>
            </div>
            <div className="text-lg">
              <IoIosArrowForward />
            </div>
          </div>
        </Link>
        <Link to="/find-tutors/Arabic">
          <div
            className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${
              theme && "text-white bg-[#0B1120] border-gray-500 opacity-80"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Replace with your icon */}
                <img src={img9} alt="" className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">Arabic tutors</h2>
              </div>
            </div>
            <div className="text-lg">
              <IoIosArrowForward />
            </div>
          </div>
        </Link>
      </div>
    );
};

export default Category;