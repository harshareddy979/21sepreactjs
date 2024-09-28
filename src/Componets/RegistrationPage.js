import React from "react";
import "./RegistrationPage.css"

function RegistrationPage(){
    return(
        <div className="Register">
            <h1>Registration Page</h1>
            <label>Username</label>
            <input type="text"></input>
            <label>Password</label>
            <input type="password"></input>
            <label>Address</label>
            <input type="text"></input>
            <button >Register</button>
        </div>
    )
}

export default RegistrationPage