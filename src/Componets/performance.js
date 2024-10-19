import React, { useMemo, useState } from "react";

function Performance(){
    const [count,setCount]=useState(0);
    var calculatedValue=useMemo(()=> bigCalculation(count),[count])
    const [name,setName]=useState('')
    const [count1,setCount1]=useState(0)
    return(
        <div>
            <h1>Performace page</h1>
            <div>
                <button onClick={()=>setCount(count+1)}>INC count</button>
                <input type="text" onChange={(e)=>setName(e.target.value)}></input>
                <button onClick={()=>setCount1(count1+1)}>INC count 1</button>
            </div>
            {"calculated value is: "+calculatedValue}
        </div>
    )
}

function bigCalculation(num){
    console.log("big calculation is getting called");
    for(let i=0;i<10;i++){
        num=num+1;
    }
    return num;
}

export default Performance;