import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [ username,setUsername ] = useState('');
    const [ password,setPassword ] = useState('');

    const API_URL = 'http://localhost:8000/users';

    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate('/dashboard');
        }
    }, [])

    const login = async (e) => {
        e.preventDefault();
        let result = await fetch(API_URL);
        if (!result.ok) throw Error('Did not receive expected data');
        let response = await result.json();
        let users = response;
        users.map((user) => {
            if(username == user.username && password == user.password) {
                navigate('/dashboard');
                localStorage.setItem("user", user.username);
            }
        });
    };

    return (
        <div className="outer">
            <div className="inner">
                <form onSubmit={login}>
                    <h3>RIT CageLab Log in</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text"
                            className="form-control" 
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div class="spaceInBetween"></div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                            className="form-control" 
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" id="login-button" className="btn btn-dark btn-lg btn-block">Sign in</button>
                </form>
            </div>
        </div>
    );
}

export default Login