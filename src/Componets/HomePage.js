import React, { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"

function HomePage(){
    const navigate=useNavigate()
    const [fruitsArray,setFruitsArray]=useState(['Apple','Banana','PineApple','grapes','Oranges']);
    const [fruitName,setFruitName]=useState("");
    return(
        <div>
            <NavBar />
            <h1>Welcome to Homepage </h1>
            <button onClick={()=>navigate("/")}>Logout</button>
            <input type="text" value={fruitName} onChange={(e)=>setFruitName(e.target.value)}></input>
            <button onClick={()=>fruitName!=="" && setFruitsArray([...fruitsArray, fruitName])}>AddFruits</button>
            <h2>Fruits Array</h2>
            <div className="wholeContent">
                {fruitsArray.map((element,index)=>{
                    return <div className="content">{element}</div>;
                })}
            </div>
        </div>
    )
}

export default HomePage