import React from "react";
import { Link } from "react-router-dom";
import SideBarGer from "../components/SideBarGer";
import '../styles/AdminEmpl.css';
import image1 from '../assets/img/Profil2.jpg'
import image2 from '../assets/img/Profil3.jpg'

export default function GerEmply() {
    return (
        <div className="adminMenu_cont">
            <SideBarGer />
            <MainGerEmpl />
        </div>
    )
}

function MainGerEmpl() {
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
                    {/*                     <Link className="adMenu_button" to='/admin_mod_empl'>Modifier</Link>
 */}                </div>
            </div>
        </div>
    ))

    return (
        <main className="adm_menu">
            <div className="admMenu_container">
                <Link className="add_plate" to='/ger_add_emply'>+</Link>
                <h3>Vos employés</h3>

                <div className="plate_cont">{employe}</div>
            </div>
        </main>
    );
}

const employes = [
    { id: 1, firstName: "Béni", lastName: "Ntambu", image: image1 },
    { id: 2, firstName: "Evodie", lastName: "Santimi", image: image2 },
]