import { Link } from "react-router-dom";
import logo from "./../assets/images/Google_Icons-09-512-removebg-preview.png"

const Login = () => {
    return (
      <div className="mt-12 md:mt-16 lg:mt-20">
        <div className="w-full max-w-lg p-4 rounded-md  sm:p-8 dark:bg-gray-50 dark:text-gray-800 mx-auto shadow-lg border">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Login to your account
          </h2>
          <p className="text-sm text-center dark:text-gray-600">
            Dont have account?
            <Link to="/signUp"
             
              rel="noopener noreferrer"
              className="focus:underline hover:underline font-bold"
            >
              Sign up here
            </Link>
          </p>
          <div className="my-6 space-y-4">
            <button
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
          <form noValidate="" action="" className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                 
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
            </div>
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
};

export default Login;