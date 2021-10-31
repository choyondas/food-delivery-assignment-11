import { useEffect, useState } from "react"
import { location } from 'react-router-dom'
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useLocation } from "react-router";
// import { useEffect } from "react/cjs/react.development";
initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {

        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)


            })
            .finally(() => setIsLoading(false));

    }

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            }).finally(() => setIsLoading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {

                setUser(user);
            }
            setIsLoading(false);
        })
    }, [])
    return {
        signInUsingGoogle,
        user,
        error,
        logout,
        isLoading
    }

}
export default useFirebase;