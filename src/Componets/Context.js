import React, { createContext, useContext } from "react";

const UserContext=createContext();
function Context(){
    var a="says hello"
    var b="hi"
    return(
        <UserContext.Provider value={{a,b}}>
            <div>
                <h1>Use Context Page {a}</h1>
                <Context2 />
            </div>
        </UserContext.Provider>
    )
}

function Context2(){
    return(
        <div>
            <h1>Use Context2 Page</h1>
            <Context3/>
        </div>
    )
}
function Context3(){
    const contextValues=useContext(UserContext)
    return(
        <div>
            <h1>Use Context3 Page {contextValues.a}</h1>
            <Context4/>
        </div>
    )
}
function Context4(){
    const contextValues=useContext(UserContext)
    return(
        <div>
            <h1>{contextValues.b} Use Context4 Page {contextValues.a}</h1>
        </div>
    )
}


export default Context;