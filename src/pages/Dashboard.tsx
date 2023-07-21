import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {

    const {state, actions} = useAuth();

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('accessToken');
        actions.setAuthUser('');
        actions.setIsLoggedIn(false);
        navigate('/');
    }

    return (
        <>
            <h1>Dashboard</h1>
            <span>User ({state.authUser}) is { state.isLoggedIn ? 'logged in' : 'logged out' }</span>
            
            {
                state.isLoggedIn && <p><button onClick={ logout }>Logout</button></p>
            }
        </>
    )
}

export default Dashboard;