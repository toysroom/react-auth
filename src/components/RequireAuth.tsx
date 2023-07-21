import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RequireAuth = ( {children}: any) => {
    
    const {state} = useAuth();
    console.log(state);
    if (!state.isLoggedIn) {
        return <Navigate to = "/" replace />
    }

    return children;

}

export default RequireAuth;