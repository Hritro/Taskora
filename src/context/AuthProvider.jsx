import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import toast from "react-hot-toast";

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)

    const [isLoading,setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginWithEmailAndPassword = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth,googleProvider)
    }

    const updateUserProfile = (displayName,photoURL) => {
        updateProfile(auth.currentUser,{displayName,photoURL})
        .then(()=> {
            toast.success('Profile Successfully Updated')
            setUser({...user,displayName,photoURL})
        })
        .catch(eer =>{
            toast.error(eer.message)
            console.log(eer)
        })
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() =>{
        const unSubcribe = onAuthStateChanged(auth,(currentUser) =>{
            // console.log(currentUser)
            setUser(currentUser)
            setIsLoading(false)
        })

        return () => unSubcribe()
    },[])

    const userInfo = {
        user,
        createUser,
        loginWithEmailAndPassword,
        signInWithGoogle,
        updateUserProfile,
        logout,
        isLoading,
    }

    return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;