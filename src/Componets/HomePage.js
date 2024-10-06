import React, { useReducer, useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"
import { defaultState, ValuesReducer } from "./Reducer";

function HomePage(){
    const navigate=useNavigate()
    const [fruitsArray,setFruitsArray]=useState(['Apple','Banana','PineApple','grapes','Oranges']);
    const [fruitName,setFruitName]=useState("");
    var fruitsObject={name:"Apple",color:"red",price:100}
    const [gender,setGender]=useState("")
    const [reducerValues,dispatch]=useReducer(ValuesReducer,defaultState)
    return(
        <div>
            <NavBar />
            <h1>Welcome to Homepage {reducerValues.userName}</h1>
            <h1>your address is {reducerValues.address}</h1>
            <button onClick={()=>navigate("/")}>Logout</button>
            <input type="text" value={fruitName} onChange={(e)=>setFruitName(e.target.value)}></input>
            <button onClick={()=>fruitName!=="" && setFruitsArray([...fruitsArray, fruitName])}>AddFruits</button>
            <div>
               <h1>Please Select Gender</h1>
               <input type="radio" checked={gender === "male"} onClick={()=>setGender("male")}></input>
               <label>Male</label>
               <input type="radio" checked={gender === "female"} onClick={()=>setGender("female")}></input>
               <label>Female</label>
            </div>
            {gender === "male" &&
            <div>
                <h2>Fruits Array</h2>
                <div className="wholeContent">
                    {fruitsArray.map((element,index)=>{
                        return <div className="content">{element}</div>;
                    })}
                </div>
            </div>
            }
            {gender === "female" &&
            <div>
                    <h2>Fruits Objects</h2>
                    <div className="wholeContent">
                        {Object.entries(fruitsObject).map((element,index)=>{
                            return <div className="content">{element[0] +":" +element[1]}</div>;
                        })}
                    </div>
            </div>
            }
        </div>
    )
}

export default HomePage