import React from "react";
import { Link } from "react-router-dom";
import '../styles/Login.css';
import Signin from "./Signin";
import Home from "./Home";
import logo from '../assets/img/logo Zeduc.png'


export default function Login() {
    return (
        <div className="container">
            <div className="left_item">
                <div className="left_top">
                    <h1><img src={logo} className="logo" /></h1>
                </div>

                <form action="/home">
                    <h2>Connectez-vous</h2>
                    <p>Entez vos identifiants pour avoir accès à votre historique</p>

                    <div className="input_container">
                        <div className="input_item">
                            <input type="email" name="email" id="email" placeholder="email" required />
                            <i class='bx bx-envelope' ></i>
                        </div>

                        <div className="input_item">
                            <input type="password" name="password" id="password" placeholder="password" required />
                            <i class='bx bx-show' ></i>
                        </div>
                    </div>

                    <div className="form_link">
                        <Link to="/signin" className="forgot">Mot de passe oublié ?</Link>
                    </div>
                    <button type="submit" className="button">valider</button>
                    <div className="sign"><p>Vous n'avez pas de compte ? <Link to="">Inscrivez-vous</Link></p></div>
                </form>
            </div>

            <div className="right_item">
                <div className="right_content">
                    <h2>Connectez-vous</h2>
                    <p>Pour avoir accès à toute nos fonctionnalités</p>
                </div>
            </div>
        </div>
    )
}