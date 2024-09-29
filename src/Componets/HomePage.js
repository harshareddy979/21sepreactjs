import React from "react";

function HomePage({loginUserName,registerFlag}){
    return(
        <div>
            <h1>Welcome to Homepage {loginUserName}</h1>
            <button onClick={()=>registerFlag(false)}>Logout</button>
        </div>
    )
}

export default HomePage