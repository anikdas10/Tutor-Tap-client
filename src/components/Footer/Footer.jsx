import { CiLinkedin } from "react-icons/ci";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import UseAuth from "../customHook/UseAuth";


const Footer = () => {
    const {theme} = UseAuth();
    return (
      <div className={`${theme && "bg-[#0B172A] text-white"} py-10`}>
        <footer className={`py-10 shadow-lg border rounded-md container px-4 ${theme && "bg-[#0A1120] border-gray-600"}`}>
          <div className="container mx-auto text-center space-y-4">
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6">
              <Link className=" text-xl transition">
                <FaFacebook />
              </Link>
              <Link className=" text-xl transition">
                <FaInstagramSquare />
              </Link>
              <Link className=" text-xl transition">
                <FaTwitter />
              </Link>
              <Link className=" text-xl transition">
                <CiLinkedin />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="space-x-8 text-sm uppercase font-bold ">
              <Link to="/" className="hover:text-gray-400 transition">
                Home
              </Link>
              <Link
                to="/find-tutors"
                className="hover:text-gray-400 transition"
              >
                Find Tutors
              </Link>
              <Link
                to="/my-tutorials"
                className="hover:text-gray-400 transition"
              >
                My Tutorials
              </Link>
              <Link className="hover:text-gray-400 transition">Contact Us</Link>
              <Link className="hover:text-gray-400 transition">Our Team</Link>
            </div>

            {/* Copyright Text */}
            <div className="text-sm  border-t py-4">
              <p>
                Copyright © {new Date().getFullYear()}; All Rights Reserved by{" "}
                <span className="font-bold">TutorTap</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;