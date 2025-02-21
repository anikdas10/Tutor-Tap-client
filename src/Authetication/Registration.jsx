import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./../assets/images/Google_Icons-09-512-removebg-preview.png";
import { useState } from "react";
import UseAuth from "../components/customHook/UseAuth";
import Swal from "sweetalert2";

const Registration = () => {
    const [err,setErr] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.state);
    const from = location?.state || "/";
    const { createUser, updateUserProfile ,setUser,googleLogin,theme,user} = UseAuth();
    // console.log(createUser);
    const handleSignUp = async e =>{
        e.preventDefault();
        const form = e.target;
        const formData = Object.fromEntries(new FormData(form))
       
        const {name,email,photo,password} = formData;
        // console.log(password);

        // password Validation
        const regexA = /^(?=.*[A-Z]).*$/;
        const regexa = /^(?=.*[a-z]).*$/;

        setErr("");

        if (!regexA.test(password)) {
          setErr("Must have an Uppercase letter in the password !! ");
          return;
        }
        if (!regexa.test(password)) {
          setErr("Must have a Lowercase letter in the password !! ");
          return;
        }
        
        if (password.length < 6) {
          setErr("Password must be at least 6 character !!");
          return;
        }

        try {
            const result = await createUser(email,password)
            // console.log(result)
            await updateUserProfile(name, photo)
            setUser({ ...result.user, photoURL: photo, displayName: name });
            Swal.fire({
              title: "Registration Successful!",
            
              icon: "success",
            });
            navigate(from)
        }
        catch(err){
            // console.log(err);
            setErr("The Email is already in Used. Please try to use another Email.")
        }
        // console.log(formData);
    }

    // google login

    const handleGoogleSignIn = async ()=>{
        try {
            await googleLogin()
             Swal.fire({
               title: "Login Successful!",

               icon: "success",
             });
             navigate(from);
        }
        catch(err){
            // console.log(err);
            setErr("Something Went Wrong!!")
        }
    }

    console.log(user);

    return (
      <div
        className={`${
          theme && "bg-[#0F172A] text-white"
        } pt-16 md:pt-20 lg:pt-24`}
      >
        <div className="container">
          <div className="flex items-center justify-center min-h-[calc(100vh-306px)]">
            <div className=" w-full max-w-lg overflow-hidden rounded-lg shadow-lg  border  mx-auto ">
              <div className="w-full px-6 py-8 md:px-8">
                <div className="flex justify-center mx-auto">
                  <img className="w-auto h-7 sm:h-8" src="" alt="" />
                </div>

                <p className="mt-3 text-xl text-center ">Sign Up Now</p>

                <div className="my-6 space-y-4">
                  <button
                    onClick={handleGoogleSignIn}
                    aria-label="Login with Google"
                    type="button"
                    className="flex items-center justify-center w-full p-4  border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 font-bold"
                  >
                    <img src={logo} className="w-10 h-10" alt="" />
                    <p>Login with Google</p>
                  </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b  lg:w-1/4"></span>

                  <div className="text-xs text-center uppercase  hover:underline">
                    or Registration with email
                  </div>

                  <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>
                <form onSubmit={handleSignUp}>
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium "
                      htmlFor="name"
                    >
                      Username
                    </label>
                    <input
                      id="name"
                      placeholder="name"
                      autoComplete="name"
                      name="name"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                    />
                  </div>
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium "
                      htmlFor="photo"
                    >
                      Photo URL
                    </label>
                    <input
                      id="photo"
                      placeholder="photo"
                      autoComplete="photo"
                      name="photo"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                    />
                  </div>
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium "
                      htmlFor="LoggingEmailAddress"
                    >
                      Email Address
                    </label>
                    <input
                      id="LoggingEmailAddress"
                      placeholder="email"
                      autoComplete="email"
                      name="email"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="email"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between">
                      <label
                        className="block mb-2 text-sm font-medium "
                        htmlFor="loggingPassword"
                      >
                        Password
                      </label>
                    </div>

                    <input
                      id="loggingPassword"
                      placeholder="Password"
                      autoComplete="current-password"
                      name="password"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      type="password"
                    />
                  </div>
                  {err && (
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-medium text-red-600 ">
                        {err}
                      </label>
                    </div>
                  )}
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform bg-gradient-to-r from-purple-500 to-blue-500 text-white  rounded-md"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b  md:w-1/4"></span>

                  <Link
                    to="/login"
                    className="text-xs text-gray-500 uppercase active font-bold"
                  >
                    or Login
                  </Link>

                  <span className="w-1/5 border-b  md:w-1/4"></span>
                </div>
              </div>
              {/* <div
            className="hidden bg-cover bg-center lg:block lg:w-1/2"
            style={{
              backgroundImage: `url(${bgImg})`,
            }}
          ></div> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;