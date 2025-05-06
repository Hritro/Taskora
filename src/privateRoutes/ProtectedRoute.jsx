import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const ProtectedRoute = ({children}) => {

    const {user,isLoading} = use(AuthContext)

    if(isLoading){
        return <div>Loading...</div>
    }

    if(!user){
        return <Navigate state={location?.pathname} to='/login'></Navigate>
    }
    if(!user){
        return <Navigate state={location?.pathname} to='/home'></Navigate>
    }

    return children
};

export default ProtectedRoute;