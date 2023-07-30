import React, { useState} from "react";
import { Link } from 'react-router-dom';
import '../loginform.css';

export const Register = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
    
    
        <div className="cover">
            <h1>Inscription</h1>
            <input type="password" placeholder="email" />
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <br />
            
            <a><Link to="/Dashboard"> 
            <div className="login-btn" onClick={popup}>Valider</div>
            </Link></a>
        </div>
    )
}

export default Register;
