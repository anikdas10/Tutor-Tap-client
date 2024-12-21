import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../fireabse/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
      setUser(currentUser);
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
    loginUserWithPassword
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;