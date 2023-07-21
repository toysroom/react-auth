import { Dispatch, SetStateAction, createContext } from "react";

interface IAuthContext {
    state: {
        authUser: string;
        isLoggedIn: boolean;
    }
    actions: {
        setAuthUser: Dispatch<SetStateAction<string>>,
        setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
    }
}

export const AuthContext = createContext<IAuthContext>({
    state: {
        authUser: '',
        isLoggedIn: false,
    },
    actions: {
        setAuthUser: () => {},
        setIsLoggedIn: () => {}    
    }
});