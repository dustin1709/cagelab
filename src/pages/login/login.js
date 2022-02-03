import React from "react";
import { useState, useEffect } from "react";

const Login = () => {
    const [ username,setUsername ]=useState('');
    const [ password,setPassword ]=useState('');

    const API_URL = '';

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="outer">
            <div className="inner">
                <form onSubmit={handleSubmit}>
                    <h3>RIT CageLab Log in</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="email"
                            className="form-control" 
                            placeholder="username"
                            value={username} />
                    </div>
                    <div class="spaceInBetween"></div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" 
                            className="form-control" 
                            placeholder="password"
                            value={password} />
                    </div>

                    <button type="submit" id="login-button" className="btn btn-dark btn-lg btn-block">Sign in</button>
                </form>
            </div>
        </div>
    );
}

export default Login