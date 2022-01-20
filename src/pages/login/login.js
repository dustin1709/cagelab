import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="outer">
                <div className="inner">
                    <form>
                        <h3>RIT CageLab Log in</h3>

                        <div className="form-group">
                            <label>Username</label>
                            <input type="email" className="form-control" placeholder="Enter username" />
                        </div>
                        <div class="spaceInBetween"></div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" id="login-button" className="btn btn-dark btn-lg btn-block">Sign in</button>
                    </form>
                </div>
            </div>
        );
    }
}
