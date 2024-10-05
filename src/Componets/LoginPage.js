import React, { useState } from "react";
import "./LoginPage.css"
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function LoginPage(props){
    const [Username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [flag,setFlag]=useState(false)
    const navigate=useNavigate()

    function loginValues(){
        if(Username !== ""){
            if(password !== ""){
              alert("login success")
              navigate("/homepage")
              setFlag(true)
            }else{
                alert("password is mismatch")
            }
        }else{
            alert("username is mismatch")
        }
    }
    return(
        <div>
            <NavBar />
            <div className="Login">
                <h1>Login Page</h1>
                <label>Username</label>
                <input type="text" value={Username} onChange={(e)=>setUserName(e.target.value)}></input>
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button onClick={()=>loginValues()}>Login</button>
                {/* {flag && <HomePage loginUserName={Username} registerFlag={props.registerFlag}/>} */}
            </div>
        </div>
    )
}

export default LoginPage