import React, { useRef } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

function UseRef(){
    const fileRef=useRef()
    const inpRef=useRef()
    return(
        <div>
            <h1>Use Ref Page</h1>
            <button onClick={()=>inpRef.current.focus()}>Feedback</button>
            <input type="file" ref={fileRef} id="file"></input>
            <div style={{display:"grid",placeContent:"center",border:"5px dashed",width:"300px"}}
            onClick={()=>fileRef.current.click()}  >
                <MdOutlineFileUpload/>
            </div>
            <input type="text" ref={inpRef}></input>
        </div>
    )
}

export default UseRef