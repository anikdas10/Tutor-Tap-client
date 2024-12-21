import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
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
// google login 

const googleLogin = ()=>{
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider)
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
      updateUserProfile,
      googleLogin
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;