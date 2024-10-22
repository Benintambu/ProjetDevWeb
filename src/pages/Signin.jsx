import React from "react";
import '../styles/SignIn.css';
import { Link } from "react-router-dom";
import logo from '../assets/img/logo Zeduc.png'

export default function SignIn() {
    return (
        <div className="sign_container">
            <div className="sign_content">
                <div className="sign_left">
                    <div className="left_top">
                        <h1><Link to="/home"><img src={logo} className="logo" /></Link></h1>
                    </div>

                    <form action="/home" className="insc_form">
                        <h2>Inscrivez-vous</h2>
                        <p>Inscrivez-vous pour profiter de nos services</p>


                        <div className="container_input">
                            <div className="item_input">
                                <input type="text" name="prenom" id="prenom" placeholder="Prénom" required />
                                <i class='bx bxs-user ico' ></i>
                            </div>

                            <div className="item_input">
                                <input type="text" name="nom" id="nom" placeholder="Nom" required />
                                <i class='bx bxs-user ico' ></i>
                            </div>

                            <div className="item_input">
                                <input type="email" name="email" id="email" placeholder="Email" required />
                                <i class='bx bxs-envelope ico' ></i>
                            </div>

                            <div className="item_input">
                                <input type="tel" name="tel" id="tel" placeholder="Téléphone" required />
                                <i class='bx bxs-phone ico' ></i>
                            </div>

                            <div className="item_input">
                                <input type="text" name="adresse" id="adresse" placeholder="Adresse" required />
                                <i class='bx bx-current-location ico' ></i>
                            </div>

                            <div className="item_input">
                                <input type="password" name="password" id="password" placeholder="Mot de passe" required />
                                <i class='bx bxs-show eye ico'></i>
                            </div>

                            <div className="item_input">
                                <input type="password" name="confirm_pass" id="confirm_pass" placeholder="Mot de passe" required />
                                <i class='bx bxs-show eye ico'></i>
                            </div>
                        </div>

                        <button type="submit">Valider</button>

                        <div className="form_signIn">
                            <p>Vous avez déjà un compte ? <Link to='/'>Connectez-vous</Link></p>
                        </div>
                    </form>
                </div>

                <div className="sign_right">
                    <div className="signR_cont"></div>
                </div>
            </div>
        </div>
    )
}