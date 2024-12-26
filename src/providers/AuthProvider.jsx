import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../fireabse/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [theme,setTheme] = useState(true);
  // create User with email and password

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // google login

  const googleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // updateProfile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // log out user

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

//   login user with email and password
const loginUserWithPassword = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

  // onAuthStateChange
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth,async (currentUser) => {
      if(currentUser)
      {
        console.log(currentUser);
        setUser(currentUser);
        const { data } = await axios.post(`${import.meta.env.VITE_SERVER_KEY}/jwt`,{email:currentUser?.email},{withCredentials:true})
        console.log(data);
      }

      else{
        setUser(currentUser)
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_KEY}/logout`,
          { withCredentials: true }
        );
        console.log(data);
      }
      
        // console.log(currentUser);
      
      setLoading(false);
    });
    return () => {
      return unsubscribed();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    updateUserProfile,
    googleLogin,
    logOutUser,
    loginUserWithPassword,
    theme,setTheme
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;