import React from "react";
import { Link } from "react-router-dom";
import SideBarGer from "../components/SideBarGer";
import image1 from '../assets/img/Profil4.jpg'
import image2 from '../assets/img/Profil.jpg'
import '../styles/GerRecl.css';

export default function GerRecl() {
    return (
        <div className="admRecl_cont">
            <SideBarGer />
            <GerReclMain />
        </div>
    )
}

function GerReclMain() {
    const reclamation = (reclamations.map(reclam =>
        <Link className="adMenu_plates empl_link ger_link" to='/ger_recl_mess'>
            <div className="admMenu_img" key={reclam.id}>
                <img src={reclam.image} alt="" key={reclam.id} />
            </div>

            <div className="adMenu_name">
                <div className="adMenuName_top gerRecl_top">
                    <h4 key={reclam.id} className="first_name">{reclam.firstName}</h4>
                    <h4 key={reclam.id}>{reclam.lastName}</h4>
                </div>
                <div className="adMenu_but butMenu_link">
                    <p key={reclam.id}>{reclam.subject}</p>
                    <div className="adMenuBut_link">
                        <Link to='/ger_recl_mess'>Messages</Link>
                        <Link to='/ger_recl_mess_resp'>Réponses</Link>
                    </div>
                </div>
            </div>
        </Link>
    ))

    return (
        <main className="adm_menu">
            <div className="admMenu_container">
                <h3>Réclamations Gérant</h3>

                <div className="plate_cont">{reclamation}</div>
            </div>
        </main>
    );
}

const reclamations = [
    { id: 1, firstName: "Carole", lastName: "Ashuza", image: image1, subject: 'Commande non reçue' },
    { id: 2, firstName: "Evodie", lastName: "Santimi", image: image2, subject: 'Erreur de livraison' },
]

