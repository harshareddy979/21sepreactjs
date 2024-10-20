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
    async function postData(){
        try{
            const apiData={
                "name":"besant",
                "age":100,
                "title":"New entry created successfully"
            }
            var response=await axios.post("https://jsonplaceholder.typicode.com/posts",apiData)
            console.log(response.data);
            setData(response.data)
        }
        catch(e){
            
        }
    }
    async function putData(){
        try{
            const apiData={
                "userId": 1000,
                "title": "Data updated sucessfully",
                "body": "kmfkgmkfgmk"
            }
            var response=await axios.put("https://jsonplaceholder.typicode.com/posts/1",apiData)
            console.log(response.data);
            setData(response.data)
        }
        catch(e){
            
        }
    }
    async function deleteData(){
        try{
            var response=await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
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
                <button onClick={()=>postData()}>postData</button>
                <button onClick={()=>putData()}>putData</button>
                <button onClick={()=>deleteData()}>deleteData</button>
            </div>
        </div>
    )
}

export default ApiCalls