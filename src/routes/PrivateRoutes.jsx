import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../components/customHook/UseAuth";


const PrivateRoutes = ({children}) => {
    const {user,loading} = UseAuth()
    const location = useLocation();
    // console.log(location.pathname);
    if(loading)
    {
       return (
         <div className="flex justify-center items-center h-screen">
           <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
         </div>
       ); 
    }
    if(user)
    {
        return children;
    }

    return (
       <Navigate state={location.pathname} to={'/login'}
       ></Navigate> 
    );
};

export default PrivateRoutes;