import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginWithEmailAndPassword = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() =>{
        const unSubcribe = onAuthStateChanged(auth,(currentUser) =>{
            console.log(currentUser)
            setUser(currentUser)
        })
    },[])

    const userInfo = {
        user,
        createUser,
        loginWithEmailAndPassword
    }

    return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;