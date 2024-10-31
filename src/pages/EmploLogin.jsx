import React from "react";
import logo from '../assets/img/logo Zeduc.png'
import '../styles/EmploLogin.css';
import back from '../assets/img/empl.jpg'

function EmploLogin() {
    return (
        <div className="adminLogin_container">
            <div className="adminLogin_content">
                <div className="adminLogin_left">
                    <div className="adminLeft_top">
                        <img src={logo} className="logo" />
                        <h3>connexion espace <br />Employé</h3>
                    </div>

                    <form action="/emplo_menu" className="admin_form">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="ntambu@gmail.com" required />
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="password" id="password" placeholder="1234ABCD" required />
                        <button type="submit">se connecter</button>
                    </form>
                </div>

                <div className="adminLogin_right emplLog_r"></div>
            </div>
        </div>
    )
}

export default EmploLogin;