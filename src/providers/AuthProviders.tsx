import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth";
import { useAuth } from "../hooks/useAuth";

export const AuthProvider = ( {children}: any ) => {

    const { state } = useAuth(); 
    const [authUser, setAuthUser] = useState(state.authUser);
    const [isLoggedIn, setIsLoggedIn] = useState(state.isLoggedIn);

    useEffect( () => {
        if (localStorage.getItem('accessToken')) {
            const user = JSON.parse(localStorage.getItem('user') || '');
            setAuthUser(user.email);
            setIsLoggedIn(true);
        }
    }, []);

    const value = { 
        state: {
            authUser,
            isLoggedIn
        },
        actions: {
            setAuthUser,
            setIsLoggedIn
        }
    };
    
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}