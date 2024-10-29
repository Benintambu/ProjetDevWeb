import React from "react";
import { Link } from "react-router-dom";
import SideBarAdm from "../components/SideBarAdm";
import '../styles/AdminEmpl.css';
import image1 from '../assets/img/Profil2.jpg'
import image2 from '../assets/img/Profil3.jpg'

export default function AdminEmpl() {
    return (
        <div className="adminMenu_cont">
            <SideBarAdm />
            <AdminMin />
        </div>
    )
}

function AdminMin() {
    const employe = (employes.map(personnel =>
        <div className="adMenu_plates">
            <div className="admMenu_img" key={personnel.id}>
                <img src={personnel.image} alt="" key={personnel.id} />
            </div>

            <div className="adMenu_name">
                <div className="adMenuName_top">
                    <h4 key={personnel.id} className="first_name">{personnel.firstName}</h4>
                    <h4 key={personnel.id}>{personnel.lastName}</h4>
                </div>
                <div className="adMenu_but">
                    <Link className="adMenu_button">Modifier</Link>
                    <button className="adMenu_button but_del">Supprimer</button>
                </div>
            </div>
        </div>
    ))

    return (
        <main className="adm_menu">
            <div className="admMenu_container">
                <Link className="add_plate" to=''>+</Link>
                <h3>Menu du jour</h3>

                <div className="plate_cont">{employe}</div>
            </div>
        </main>
    );
}

const employes = [
    { id: 1, firstName: "Béni", lastName: "Ntambu", image: image1 },
    { id: 2, firstName: "Evodie", lastName: "Santimi", image: image2 },
]