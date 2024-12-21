import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../fireabse/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);

// create User with email and password

const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

// updateProfile
const updateUserProfile = (name,photo)=>{
   return updateProfile(auth.currentUser, {
     displayName: name,
     photoURL: photo,
   });
}
    const authInfo = {
      user,
      setUser,
      loading,
      createUser,
      updateUserProfile
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;