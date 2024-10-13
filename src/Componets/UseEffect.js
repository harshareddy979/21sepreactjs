import React, { useEffect, useState } from "react";

function UseEffect(){

    const [a,setA]=useState(0)
    const [b,setB]=useState(1)

    useEffect(()=>{
        alert("hi welcome to my page")
    },[])

    useEffect(()=>{
        if(a !==0){
            // alert("value of a is getting changed")
            setB(a+1)
        }
    },[a])

    return(
        <div>
            <h1>Use Effect Page</h1>
            {"value of a is : "+a}
            <button onClick={()=>setA(a+1)}>Increment</button>
            {"value of b is : "+b}
        </div>
    )
}

export default UseEffect