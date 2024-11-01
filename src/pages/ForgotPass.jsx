import React from "react";
import { Link } from "react-router-dom";
import '../styles/Login.css';
import Signin from "./Signin";
import Home from "./Home";
import logo from '../assets/img/logo Zeduc.png'


export default function ForgotPass() {
    function showPassword() {
        const password = document.getElementById('password');
        const showbtn = document.querySelector('.show_log');

        if (password.type === "password") {
            password.type = "text";
            showbtn.classList.add('bxs-hide');
        } else {
            password.type = "password";
            showbtn.classList.remove('bxs-hide');
        }

    }

    return (
        <div className="container">
            <div className="left_item">
                <div className="left_top">
                    <h1><Link to="/home"><img src={logo} className="logo" /></Link></h1>
                </div>

                <form action="/">
                    <h2>Réinitialisez votre mot de passe</h2>
                    <p>Entrez votre email pour recevoir un message <br />de confirmation</p>

                    <div className="input_container">
                        <div className="input_item">
                            <input type="email" name="email" id="email" placeholder="email" required />
                            <i class='bx bxs-envelope' ></i>
                        </div>
                    </div>

                    <button type="submit" className="button">valider</button>
                </form>
            </div>

            <div className="right_item">
                <div className="right_content"></div>
            </div>
        </div>
    )
}