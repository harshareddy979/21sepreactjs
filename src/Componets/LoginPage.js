import React from "react";
import "./LoginPage.css"

function LoginPage(){
    return(
        <div className="Login">
            <h1>Login Page</h1>
            <label>Username</label>
            <input type="text"></input>
            <label>Password</label>
            <input type="password"></input>
            <button >Login</button>
        </div>
    )
}

export default LoginPage