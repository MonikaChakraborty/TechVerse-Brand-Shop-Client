import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {auth} from "../firebase/firebase.config"


export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    // google login
    const googleLogin = () => {
        setLoading(true);
       return signInWithPopup(auth, googleProvider)

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
        // user
        createUser,
        signIn,
        logOut,
        loading,
        user
    }




    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;