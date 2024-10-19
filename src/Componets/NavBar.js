import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(){
    console.log("NavBar is getting called")
    return(
        <div className="navbar">
            <Link to='/'>MainPage</Link>
            <Link to='/register'>RegisterPage</Link>
            <Link to='/login'>LoginPage</Link>
            <Link to='/homepage'>HomePage</Link>
            <Link to='/contact'>ContactPage</Link>
        </div>
    )
}

export default memo(NavBar);