import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./../assets/images/Google_Icons-09-512-removebg-preview.png";
import UseAuth from "../components/customHook/UseAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [err, setErr] = useState("");
  const { loginUserWithPassword, googleLogin } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state);
  const from = location?.state || '/';

  // login user with email and password
  const handleLoginUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setErr("");
    try {
      const result = await loginUserWithPassword(email, password);
    //   console.log(result);
      Swal.fire({
        title: "Login Successful!",

        icon: "success",
      });
      navigate(from);
    } catch (err) {
      console.log(err);
      setErr("Invalid Email or Password");
    }
  };

//   login with email
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
            console.log(err);
            setErr("Something Went Wrong!!")
        }
    }

  return (
    <div className="mt-12 md:mt-16 lg:mt-20">
      <div className="w-full max-w-lg p-4 rounded-md  sm:p-8 dark:bg-gray-50 dark:text-gray-800 mx-auto shadow-lg border">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-600">
          Dont have account?
          <Link
            to="/signUp"
            rel="noopener noreferrer"
            className="focus:underline hover:underline font-bold"
          >
            Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button onClick={handleGoogleSignIn}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4  border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 font-bold"
          >
            <img src={logo} className="w-10 h-10" alt="" />
            <p>Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        {/* form */}
        <form onSubmit={handleLoginUser}>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              autoComplete="email"
              name="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="loggingPassword"
              >
                Password
              </label>
            </div>

            <input
              id="loggingPassword"
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
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
