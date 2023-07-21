import axios from "axios";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    const {actions} = useAuth();
    
    const [userRegister, setUserRegister] = useState({
        email: '', password: ''
    });

    // const changeEmail = (e: any) => {
    //     const email = e.target.value;
    //     setUserRegister({
    //         email,
    //         password: userRegister.password
    //     })
    // }

    // const changePassword = (e: any) => {
    //     const password = e.target.value;
    //     setUserRegister({
    //         email: userRegister.email,
    //         password
    //     })
    // }

    const changeField = (e: any) => {
        const id = e.target.id;
        const value = e.target.value;

        setUserRegister({
            ...userRegister,
            [id]: value
        })
    }

    const register = async (e: any) => {
        e.preventDefault();
        const url = 'http://localhost:4000/register';
        const response = await axios.post(url, userRegister);
        console.log(response);

        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        actions.setIsLoggedIn(true);
        actions.setAuthUser(response.data.user.email);

        navigate('/dashboard');
       
    }

    return (
        <>
            <h1>Register</h1>
            <pre>
                { JSON.stringify(userRegister, null, 4) }
            </pre>
            <form onSubmit={ register }>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={ changeField } />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={ changeField } />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </>
    )
}

export default Register;