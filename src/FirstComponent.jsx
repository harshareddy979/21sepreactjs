//syntax of functional component
import React, { useState } from "react";
import "./FirstComponent.css"

function FirstComponent(){
    const [headerText,setHeaderText]=useState("This is First React component")
    // var headerText="This is First React component";
    const [a,setA]=useState(10)
    // var a=10
    function updateValue(){
        setA((a)=>a+1)
    }
    function changeText(){
        setHeaderText("hello welcome to our page")
    }
    return(
        <div>
            <h1 style={{color:"red",fontSize:"16px"}}>{headerText}</h1>
            <input type="text" onChange={(e)=>setHeaderText(e.target.value)}></input>
            <button onClick={()=>changeText()}>change text</button>
            <button onClick={()=>updateValue()}>Increment</button>
            {"value of a is : "+ a}
            <SecondComponent />
        </div>
    )
}

function SecondComponent(){
    var headerText="This is second react component"
    return(
        <div>
            <h1 className="secondHeader">{headerText}</h1>
        </div>
    )
}

export default FirstComponent