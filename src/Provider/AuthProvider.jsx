import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {auth} from "../firebase/firebase.config"


export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    // google login
    const googleLogin = () => {
        setLoading(true);
       return signInWithPopup(auth, googleProvider)

    }

    // github login
    const githubLogin = () => {
        setLoading(true);
       return signInWithPopup(auth, githubProvider)

    }

    // register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }



    // 
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }





    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    // observer
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
          setUser(user);
          setLoading(false);
          });
          
    }, [])

    console.log(user);


    const authentications = {
        googleLogin,
        createUser,
        signIn,
        logOut,
        loading,
        user,
        githubLogin,
        handleUpdateProfile
    }




    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;