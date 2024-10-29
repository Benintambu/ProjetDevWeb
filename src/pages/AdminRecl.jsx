import React from "react";
import { Link } from "react-router-dom";
import SideBarAdm from "../components/SideBarAdm";
import '../styles/AdminRecl.css';
import image1 from '../assets/img/Profil4.jpg'
import image2 from '../assets/img/Profil.jpg'

export default function AdminRecl() {
    return (
        <div className="admRecl_cont">
            <SideBarAdm />
            <AdminMin />

        </div>
    )
}

function AdminMin() {
    const reclamation = (reclamations.map(reclam =>
        <Link className="adMenu_plates empl_link">
            <div className="admMenu_img" key={reclam.id}>
                <img src={reclam.image} alt="" key={reclam.id} />
            </div>

            <div className="adMenu_name">
                <div className="adMenuName_top">
                    <h4 key={reclam.id} className="first_name">{reclam.firstName}</h4>
                    <h4 key={reclam.id}>{reclam.lastName}</h4>
                </div>
                <div className="adMenu_but">
                    <p key={reclam.id}>{reclam.subject}</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <main className="adm_menu">
            <div className="admMenu_container">
                <h3>Menu du jour</h3>

                <div className="plate_cont">{reclamation}</div>
            </div>
        </main>
    );
}

const reclamations = [
    { id: 1, firstName: "Carole", lastName: "Ashuza", image: image1, subject: 'Commande non reçue' },
    { id: 2, firstName: "Evodie", lastName: "Santimi", image: image2, subject: 'Erreur de livraison' },
]