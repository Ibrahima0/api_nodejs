import React, {useState} from "react";
import { Link } from 'react-router-dom';
import '../loginform.css';

export const Login = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
    
    
        <div className="cover">
            <h1>Connexion</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>Login</div>

            <p className="text">Pas de comptes?</p>

            <div className="alt-login">
            <a><Link to="/Register">S'inscrire</Link></a>
            </div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>
            
        </div>
    )
}

export default Login;
