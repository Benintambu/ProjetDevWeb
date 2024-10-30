import React from "react";
import { Link } from "react-router-dom";
import '../styles/AdminMenu.css'
import SideBarAdm from "../components/SideBarAdm";
import image1 from '../assets/img/grilled-steak-fillet-with-fresh-vegetable-salad-generated-by-ai.jpg';
import image2 from '../assets/img/img_promo.jpg';

function AdminMenu() {
    return (
        <div className="adminMenu_cont">
            <SideBarAdm />
            <AdminMin />
        </div>
    )
}

function AdminMin() {
    const plats = (plates.map(plat =>
        <div className="adMenu_plates">
            <div className="admMenu_img" key={plat.id}>
                <img src={plat.image} alt="" key={plat.id} />
            </div>

            <div className="adMenu_name">
                <h4 key={plat.id}>{plat.name}</h4>
                <h5>Prix: {plat.price}</h5>
                <div className="adMenu_but">
                    <Link className="adMenu_button" to='/admin_mod_plat'>Modifier</Link>
                    <button className="adMenu_button but_del">Supprimer</button>
                </div>
            </div>
        </div>
    ))

    return (
        <main className="adm_menu">
            <div className="admMenu_container">
                <Link className="add_plate" to='/admin_plate'>+</Link>
                <h3>Menu du jour</h3>

                <div className="plate_cont">{plats}</div>
            </div>
        </main>
    );
}

const plates = [
    { id: 1, name: "Pondu", price: 5000, description: "Plat de pondu", image: image1 },
    { id: 2, name: "Madesu", price: 7000, description: "Plat de Madesu", image: image2 },
]

export default AdminMenu;