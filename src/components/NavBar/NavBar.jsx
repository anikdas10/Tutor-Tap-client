

import { useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

import logo from "./../../assets/images/tutor-removebg-preview.png"
// import { AuthContext } from "../../assets/AuthProvider/AuthProvider";
// import { signOut } from "firebase/auth";
// import { auth } from "../../assets/firebase/firebase.config";
// import Swal from "sweetalert2";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { CiDark, CiLight } from "react-icons/ci";
import UseAuth from "../customHook/UseAuth";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {user} = UseAuth();

//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       Swal.fire({
//         title: "Log out Successful",
//         icon: "success",
//         confirmButtonText: "Close",
//       });
//     });
//   };

//   console.log(user?.photoURL);

  return (
    <div className="bg-white fixed w-full top-0 left-0 z-50 py-2 border-b shadow-md">
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
          className={` absolute top-11 container px-2 mx-auto flex  justify-center backdrop-blur-sm duration-1000 rounded-md py-4  bg-opacity-60 lg:static  lg:w-auto lg:mx-0 ${
            open ? "left-0 right-0" : "left-[800px]"
          }`}
        >
          <ul className="flex items-center flex-col lg:flex-row gap-2 lg:gap-5 text-black">
            <li className="text-lg">
              <NavLink to="/" onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>

            <li className="text-lg">
              <NavLink to="/allEquipment" onClick={() => setOpen(false)}>
                Find Tutors
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink to="/addEquipment" onClick={() => setOpen(false)}>
                Add Tutorials
              </NavLink>
            </li>

            <li className="text-lg">
              <NavLink to="/myEquipment" onClick={() => setOpen(false)}>
                My Tutorials
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink to="/myEquipment" onClick={() => setOpen(false)}>
                My booked tutors
              </NavLink>
            </li>
            {/* <li
              onClick={toggleTheme}
              className="text-3xl cursor-pointer hidden lg:block"
            >
              {theme ? <CiDark /> : <CiLight />}
            </li> */}

            {user && user?.email ? (
              <li
                className={`w-10 h-10 hidden cursor-pointer  ${
                  user ? "lg:block" : ""
                }`}
              >
                <img
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
                  onClick={() => {
                    setOpen(false), handleLogout();
                  }}
                >
                  Log Out
                </button>
              ) : (
                <Link onClick={() => setOpen(false)} to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2 lg:hidden z-50">
          <div className="text-xl md:text-2xl cursor-pointer font-bold text-white lg:hidden"></div>
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