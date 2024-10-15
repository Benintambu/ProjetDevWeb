import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css'
import logo from '../assets/img/logo Zeduc.png'
import profil from '../assets/img/Profil.jpg'
import cart from '../assets/img/panier.png'


const NavBar = () => {
    return (
        <header>
            <nav>
                <h1><Link to="/home"><img src={logo} alt="Logo" className="logo" /></Link></h1>

                <ul className="nav_links">
                    <li><Link to="/home" className="active">Accueil</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/event">Evénements</Link></li>
                    <li><Link to="/contact">Contactez-nous</Link></li>
                </ul>

                <div className="nav_end">
                    <Link to="/cart">
                        <img src={cart} alt="Panier" className="cart" />
                    </Link>
                    <div className="profil_container">
                        <Link to="/profil">
                            <img src={profil} alt="Profil" className="profil" />
                        </Link>
                    </div>

                    <div className="hamburger">
                        <div className="burger"></div>
                        <div className="burger"></div>
                    </div>
                </div>


            </nav>
        </header>

    );
}

export default NavBar;