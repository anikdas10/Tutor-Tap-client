import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SERVER_KEY,
  withCredentials:true
})

const useAxiosSecure = ()=>{
    const { logOutUser } = UseAuth();
    const navigate = useNavigate();
   useEffect(()=>{
     axiosSecure.interceptors.response.use(
       (res) => {
         return res;
       },
       async (error) => {
         console.log(error.response);
         if (error.response.status === 401 || error.response.status === 403) {
           logOutUser();
           navigate("/login");
         }
       }
     );

   },[logOutUser,navigate])
return axiosSecure
}

export default useAxiosSecure;