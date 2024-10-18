import React from "react";
import { Link } from "react-router-dom";
import '../styles/Contact.css';
import logo from '../assets/img/logo Zeduc.png';
import NavBar from "../components/NavBar";

function Contact() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <Main />
        </>
    );
}

const Main = () => {
    return (
        <main className="main_contact">
            <div className="contact_container">
                <div className="contact_top">
                    <div className="contactTop_left">
                        <h4>Contactez-nous</h4>
                        <a href="mailto:ntambube@gmail.com">ntambube@gmail.com</a>
                    </div>

                    <div className="contactTop_right">
                        <p>Soumettre une réclamation</p>
                        <form action="" className="contact_form">
                            <input type="text" name="sujet" id="sujet" placeholder="Sujet" />

                            <textarea name="text" id="text" placeholder="Message"></textarea>
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                </div>

                <div className="contact_bot">
                    <p>© 2024 Zeduc-Sp@ce. Tous les droits reservés</p>
                </div>
            </div>
        </main>
    );
}

export default Contact;