import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {

    const navigate = useNavigate();
    const {actions} = useAuth();

    const [userLogged, setUserLogged] = useState({
        email: '', password: ''
    });

    const changeField = (e: any) => {
        const id = e.target.id;
        const value = e.target.value;

        setUserLogged({
            ...userLogged,
            [id]: value
        })
    }

    const login = async (e: any) => {
        e.preventDefault();
        const url = 'http://localhost:4000/login';
        const response = await axios.post(url, userLogged);
        console.log(response);

        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        actions.setIsLoggedIn(true);
        actions.setAuthUser(response.data.user.email);

        navigate('/dashboard');
    }

    return (
        <>
            <h1>Login</h1>
            
            <form onSubmit={ login }>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={ changeField } />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={ changeField } />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </>
    )
}

export default Login;