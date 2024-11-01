import React, { useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../contexts/CartContext';
import gsap from 'gsap';
import '../styles/Home.css';
import '../styles/NavBar.css';
import logo from '../assets/img/logo Zeduc.png';
import profil from '../assets/img/Profil.jpg';
import cart from '../assets/img/panier.png';

const NavBar = () => {
    const { cart } = useContext(CartContext);
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

    const playAnimation = () => {
        animationRef.current.play();
    };

    const reverseAnimation = () => {
        animationRef.current.reverse();
    };

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
                    <Link to="/cart" style={{ position: 'relative' }}>
                        <i className='bx bxs-cart-alt cart'></i>
                        {cart.length > 0 && (
                            <div className="cart-notification">{cart.length}</div>
                        )}
                    </Link>
                    <div className="profil_container">
                        <div to="/profil">
                            <img src={profil} alt="Profil" className="profil" />
                            <ul>
                                <li><Link to='/profil'>Votre profil</Link></li>
                                <li><Link to='/histo'>Historique</Link></li>
                                <li><Link to='/parr'>Parrainage</Link></li>
                                <li><Link to='/'>Déconnexion</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={playAnimation} className="hamburger">
                        <div className="burger"></div>
                        <div className="burger"></div>
                    </div>
                </div>
                <div className="nav_mobile">
                    <div className="navMobile_cont">
                        <div className="navMobile_head">
                            <div className="navMobile_top">
                                <i onClick={reverseAnimation} className='bx bx-x close'></i>
                            </div>
                            <Link to="/profil" className="navMobile_profile">
                                <div className="navMobile_left">
                                    <img src={profil} alt="" />
                                </div>
                                <div className="navMobile_right">
                                    <h3>Isaac Ngangu</h3>
                                    <p>100 <span>Points de fidélité</span></p>
                                </div>
                            </Link>
                        </div>
                        <div className="navMobile_links">
                            <ul>
                                <li><Link to="/home" className="active">Accueil</Link></li>
                                <li><Link to="/menu">Menu</Link></li>
                                <li><Link to="/event">Evénements</Link></li>
                                <li><Link to='/histo'>Historique</Link></li>
                                <li><Link to='/parr'>Parrainage</Link></li>
                                <li><Link to="/contact">Contactez-nous</Link></li>
                                <li><Link to='/'>Déconnexion</Link></li>
                            </ul>
                        </div>
                        <div className="navMobile_foot">
                            <p>© 2024 Zeduc-Sp@ce. Tous les droits reservés</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
