import axios from "axios";
import React, { useState } from "react";

function ApiCalls(){
    const [data,setData]=useState()
    async function getData(){
        try{
            var response=await axios.get("https://jsonplaceholder.typicode.com/posts/1")
            console.log(response.data);
            setData(response.data)
        }
        catch(e){
            
        }
    }
    return(
        <div>
            <h1>Api Calls</h1>
            {data && data.title}
            <div>
                <button onClick={()=>getData()}>getData</button>
            </div>
        </div>
    )
}

export default ApiCalls