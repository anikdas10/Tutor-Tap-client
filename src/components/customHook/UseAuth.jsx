import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const UseAuth = () => {
   const context = useContext(AuthContext);
   return context;
};

export default UseAuth;