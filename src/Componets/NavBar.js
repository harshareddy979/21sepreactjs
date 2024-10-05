import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(){
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

export default NavBar;