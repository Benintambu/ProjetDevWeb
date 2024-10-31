import React from "react";
import { Link } from "react-router-dom";
import SideBarAdm from "../components/SideBarAdm";
import SideBarGer from "../components/SideBarGer";
import image1 from '../assets/img/Profil4.jpg'
import image2 from '../assets/img/Profil.jpg'
import profil from '../assets/img/Profil3.jpg'
import '../styles/GerRecl.css';
import '../styles/GerReclMessRep.css';

export default function GerReclMessRep() {
    return (
        <div className="admRecl_cont">
            <SideBarGer />
            <Profil />
            <GerReclMain />
        </div>
    )
}

function Profil() {
    return (
        <div className="gerRecl_profil">
            <div className="gerReclProf_cont">
                <div className="gerRecl_profilImg">
                    <img src={user.userImg} alt="" />
                </div>

                <h2>{user.firstName} {user.lastName}</h2>
            </div>
        </div>
    );
}

function GerReclMain() {
    const reclamation = (employeResponses.map(reclam =>
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
                        <Link to='/ger_recl_mess_resp_empl'>Voir</Link>
                    </div>
                </div>
            </div>
        </Link>
    ))

    return (
        <main className="adm_menu">
            <div className="admMenu_container">
                <h3>Réponses</h3>

                <div className="plate_cont">{reclamation}</div>
            </div>
        </main>
    );
}

const employeResponses = [
    { id: 1, firstName: "Carole", lastName: "Ashuza", image: image1, subject: 'Message reçu' },
    { id: 2, firstName: "Evodie", lastName: "Santimi", image: image2, subject: 'Désolé pour le désagrément' },
]

const user = {
    firstName: 'Evodie',
    lastName: 'Santimi',
    subject: 'Commande non reçue',
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem error facilis, deleniti fugit quos aperiam eligendi harum pariatur. Atque repellat ea vitae consequuntur eum adipisci laudantium doloremque nobis alias sapiente aliquam, rerum minus unde. Dolore architecto, quas asperiores assumenda error ducimus debitis, eos rerum ipsum soluta cupiditate nihil temporibus. Est.',
    date: '29.10.204',
    userImg: profil,
}