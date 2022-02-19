import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [ username,setUsername ] = useState('');
    const [ password,setPassword ] = useState('');
    const [ errSMS, setErrSMS ] = useState('');

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
            } else {
                setErrSMS('Invalid credentials. Please try again.');
            }
        });
    };

    return (
        <div className="outer">
            <div className="inner">
                <form onSubmit={login}>
                    <h3>RIT CageLab Log in</h3>
                    {errSMS ? (<p style={{color: "red"}}>{errSMS}</p>) : <></>}
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
                    <div style={{ padding: "1.5%", clear: "both" }}></div>
                        <Link to="/staff">Staff login</Link>
                    <div style={{ padding: "0.5%", clear: "both" }}></div>
                    <button type="submit" id="login-button" className="btn btn-secondary btn-lg btn-block">Sign in</button>
                </form>
            </div>
        </div>
    );
}

export default Login