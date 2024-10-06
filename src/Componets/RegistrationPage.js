import React, { useReducer, useState } from "react";
import "./RegistrationPage.css"
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { defaultState, ValuesReducer } from "./Reducer";

function RegistrationPage(){
    const [Username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [Address,setAddress]=useState("")
    const [flag,setFlag]=useState(false)
    const navigate=useNavigate()
    const [reducerValues,dispatch]=useReducer(ValuesReducer,defaultState)

    async function registerValues(){
        if(Username !== ""){
            if(password !== ""){
                if(Address !== ""){
                    await dispatch({type:"VALUES",userName:Username,password:password,address:Address})
                    alert("registration success")
                    navigate("/login")
                    setFlag(true)
                }else{
                    alert("address is required")
                }
            }else{
                alert("password is required")
            }
        }else{
            alert("username is required")
        }
    }
    return(
        <div>
            <NavBar/>
            <div className="Register">
                <h1>Registration Page</h1>
                <label>Username</label>
                <input type="text" value={Username} onChange={(e)=>setUserName(e.target.value)}></input>
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <label>Address</label>
                <input type="text" value={Address} onChange={(e)=>setAddress(e.target.value)}></input>
                <button onClick={()=>registerValues()}>Register</button>
                {/* {flag && <LoginPage registerUserName={Username} registerPassword={password} registerFlag={setFlag}/>} */}
            </div>
        </div>
    )
}

export default RegistrationPage