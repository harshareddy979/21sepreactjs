import React from "react";
import NavBar from "./NavBar";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "./ContactPage.css"
import { Link } from "react-router-dom";

function ContactPage(){
    return(
        <div>
            <NavBar/>
            <div className="contact">
                <h1>Contact Page</h1>
                <label>Instagram</label>
                <Link to='https://www.instagram.com/besant_technologies/'><FaInstagram/></Link> 
                <label>FaceBook</label>
                <Link to='https://www.facebook.com/BesantTechnologies/'><FaFacebook/></Link> 
            </div>
        </div>
    )
}

export default ContactPage;