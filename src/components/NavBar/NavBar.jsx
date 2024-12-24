
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/images/tutor-removebg-preview.png"
import { Tooltip as ReactTooltip } from "react-tooltip";
import { CiDark, CiLight } from "react-icons/ci";
import UseAuth from "../customHook/UseAuth";
import Swal from "sweetalert2";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {user,logOutUser,theme,setTheme} = UseAuth();

  const handleLogout = async() => {
   try{
     await logOutUser()
     Swal.fire({
       title: "Log out Successful",
       icon: "success",
       confirmButtonText: "Close",
     });
   }catch(err){
    console.log(err);
   }
  };

  console.log(theme);

  return (
    <div
      className={` fixed w-full top-0 left-0 z-50  border-b shadow-md backdrop-blur-2xl transition-colors ${
        theme && "bg-[#0B1120] text-white border-gray-400"
      }`}
    >
      <nav className="container flex items-center justify-between relative ">
        <Link to="/">
          <div className="flex items-center">
            <div className="w-10 z-50 md:w-12  lg:w-16 ">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="text-lg font-semibold">TutorTap</h1>
          </div>
        </Link>

        <div
          className={` absolute top-11 container px-2 mx-auto flex  justify-center w-full   bg-[#0B1120]/80 duration-1000   rounded-md py-4 lg:static  lg:w-auto lg:mx-0 lg:bg-transparent ${
            theme && ""
          } ${open ? " left-0 right-0 " : "left-[800px]"}`}
        >
          <ul
            className={`flex  
              
              items-center flex-col lg:flex-row gap-2 lg:gap-5 lg:text-
               ${theme ? "text-white " : "text-black"}`}
          >
            <li className="text-lg">
              <NavLink to="/" onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>

            <li className="text-lg">
              <NavLink to="/find-tutors" onClick={() => setOpen(false)}>
                Find Tutors
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink to="/addTutorials" onClick={() => setOpen(false)}>
                Add Tutorials
              </NavLink>
            </li>

            <li className="text-lg">
              <NavLink to="/my-tutorials" onClick={() => setOpen(false)}>
                My Tutorials
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink to="/my-booked-tutors" onClick={() => setOpen(false)}>
                My booked tutors
              </NavLink>
            </li>
            <li
              onClick={() => setTheme(!theme)}
              className="text-3xl cursor-pointer md:hidden lg:block"
            >
              {theme ? <CiDark /> : <CiLight />}
            </li>

            {user && user?.email ? (
              <li
                className={`w-10 h-10 hidden cursor-pointer  ${
                  user ? "lg:block" : ""
                }`}
              >
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  className="rounded-full h-full w-full"
                  alt="profile"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                />
              </li>
            ) : (
              ""
            )}

            <li className="text-lg ">
              {user ? (
                <button
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-lg py-2 px-6 rounded-md "
                  onClick={() => {
                    setOpen(false), handleLogout();
                  }}
                >
                  Log Out
                </button>
              ) : (
                <Link
                  onClick={() => setOpen(false)}
                  to="/login"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-lg py-2 px-6 rounded-md "
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2 lg:hidden z-50">
          <div
            onClick={() => setTheme(!theme)}
            className="text-xl md:text-2xl cursor-pointer font-bold  lg:hidden"
          >
            {theme ? <CiDark /> : <CiLight />}
          </div>
          <div className={`w-8 h-8 cursor-pointer ${user ? "" : "hidden"}`}>
            {user && user?.email ? (
              <img
                src={user?.photoURL}
                className="rounded-full w-full h-full"
                data-tooltip-id="my-tooltip1"
                data-tooltip-content={user?.displayName}
                alt=""
              />
            ) : (
              ""
            )}
          </div>
          <div
            className=" cursor-pointer font-extrabold text-xl"
            onClick={() => setOpen(!open)}
          >
            {open === true ? <IoCloseOutline /> : <RiMenu3Fill />}
          </div>
        </div>
      </nav>

      <ReactTooltip place="bottom" type="info" effect="solid" id="my-tooltip" />

      <ReactTooltip
        place="bottom"
        type="info"
        effect="solid"
        className="bg-[#00ABE4]"
        id="my-tooltip1"
      />
    </div>
  );
};

export default Navbar;

