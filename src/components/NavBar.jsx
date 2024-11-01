// components/NavBar.js
import React, { useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { CartContext } from '../contexts/CartContext'; // Importez le contexte du panier
import '../styles/Home.css';
import '../styles/NavBar.css';
import logo from '../assets/img/logo Zeduc.png';
import profil from '../assets/img/Profil.jpg';

gsap.registerPlugin();

const NavBar = () => {
    const { cart } = useContext(CartContext); // Accédez aux articles dans le panier
    const container = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        animationRef.current = gsap.to('.nav_mobile', {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            duration: 2,
            ease: 'Power1.easeOut',
            paused: true,
        });
    }, []);

    const playAnimation = () => animationRef.current.play();
    const reverseAnimation = () => animationRef.current.reverse();

    return (
        <header>
            <nav>
                <h1><Link to="/home"><img src={logo} alt="Logo" className="logo" /></Link></h1>
                <ul className="nav_links">
                    <li><Link to="/home" className="active">Accueil</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/promo">Promotions</Link></li>
                    <li><Link to="/event">Evénements</Link></li>
                    <li><Link to="/about">A propos de nous</Link></li>
                    <li><Link to="/contact">Contactez-nous</Link></li>
                </ul>
                <div className="nav_end">
                    <Link to="/cart" className="cart-icon">
                        <i className='bx bxs-cart-alt cart'></i>
                        {cart.length > 0 && (
                            <span className="cart-count">{cart.length}</span> // Affichez le cercle rouge
                        )}
                    </Link>
                    <div className="profil_container">
                        <img src={profil} alt="Profil" className="profil" />
                    </div>
                    <div onClick={playAnimation} className="hamburger">
                        <div className="burger"></div>
                        <div className="burger"></div>
                    </div>
                </div>
                <div className="nav_mobile">
                    <div className="navMobile_cont">
                        <div className="navMobile_head">
                            <i onClick={reverseAnimation} className='bx bx-x close'></i>
                        </div>
                        <Link to="/profil" className="navMobile_profile">
                            <div className="navMobile_left">
                                <img src={profil} alt="Profil" />
                            </div>
                            <div className="navMobile_right">
                                <h3>Isaac Ngangu</h3>
                                <p>100 <span>Points de fidélité</span></p>
                            </div>
                        </Link>
                        <div className="navMobile_links">
                            <ul>
                                <li><Link to="/home">Accueil</Link></li>
                                <li><Link to="/menu">Menu</Link></li>
                                <li><Link to="/promo">Promotions</Link></li>
                                <li><Link to="/event">Evénements</Link></li>
                                <li><Link to='/histo'>Historique</Link></li>
                                <li><Link to='/parr'>Parrainage</Link></li>
                                <li><Link to="/about">A propos de nous</Link></li>
                                <li><Link to="/contact">Contactez-nous</Link></li>
                                <li><Link to='/'>Déconnexion</Link></li>
                            </ul>
                        </div>
                        <div className="navMobile_foot">
                            <p>© 2024 Zeduc-Sp@ce. Tous droits réservés</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
