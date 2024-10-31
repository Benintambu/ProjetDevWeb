import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo Zeduc.png';
import '../styles/SideBarAdm.css'
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function SideBarAdm() {
    const container = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        // Initialisation de l'animation GSAP avec pause au début
        animationRef.current = gsap.to('.side_bar', {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            duration: 1.5,
            ease: 'Power1.easeOut',
            paused: true, // L'animation est mise en pause au début
        });
    }, []);

    // Fonction pour jouer l'animation
    const playAnimation = () => {
        animationRef.current.play();
    };

    // Fonction pour inverser l'animation
    const reverseAnimation = () => {
        animationRef.current.reverse();
    };

    return (
        <>
            <div className="side_button" onClick={playAnimation}>
                <div className="side_burger"></div>
                <div className="side_burger"></div>
                <div className="side_burger"></div>
            </div>
            <div className="side_bar">
                <div className="sideBar_cont">
                    <div className="sideBar_top">
                        <h1><img src={logo} alt="Logo Zeduc" className="logo_adm" /></h1>
                        <i onClick={reverseAnimation} class='bx bx-x side_close'></i>
                    </div>

                    <div className="sideBar_bot">
                        <div className="sideBot_top">
                            <Link className="side_link side_active" to='/admin_menu'>Menu</Link>
                            <Link className="side_link" to='/admin_stats'>Stats</Link>
                            <Link className="side_link" to='/admin_recl'>Réclamations</Link>
                        </div>
                        <div className="sideBot_bot">
                            <Link className="side_link" to='/admin_log'>Déconnexion</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

